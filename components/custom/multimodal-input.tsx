'use client';
// @ts-nocheck

'use client';
// @ts-nocheck

// External imports
import { Attachment, ChatRequestOptions, CreateMessage, Message } from 'ai';
import cx from 'classnames';
import { motion } from 'framer-motion';
import React, {
  useRef,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { useLocalStorage, useWindowSize } from 'usehooks-ts';

// Alias imports (sorted alphabetically)
import { ChatBotAPI } from '@/redux/Chat/Api';
import { Add_NewChat } from '@/redux/Chat/Slice';
import { AppDispatch, RootState } from '@/redux/store';

// Relative imports
import { ArrowUpIcon, PaperclipIcon, StopIcon } from './icons';
import { PreviewAttachment } from './preview-attachment';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const suggestedActions = [
  {
    title: 'What is the weather',
    label: 'in San Francisco?',
    action: 'What is the weather in San Francisco?',
  },
  {
    title: 'Help me draft an essay',
    label: 'about Silicon Valley',
    action: 'Help me draft a short essay about Silicon Valley',
  },
];

export function MultimodalInput({
  chatId,
  stop,
  attachments,
  setAttachments,
  setMessages,
  append,
  handleSubmit,
  className,
}: {
  chatId: string;
  stop: () => void;
  attachments: Array<Attachment>;
  setAttachments: Dispatch<SetStateAction<Array<Attachment>>>;
  setMessages: Dispatch<SetStateAction<Array<Message>>>;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  className?: string;
}) {
  const [input, setInput] = useState('');
  let dispatch = useDispatch<AppDispatch>();
  const { Chat_Data, Chat_Message } = useSelector(
    (state: RootState) => state.ChatBot
  );

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  console.log('Chat_Message---', Chat_Message);

  useEffect(() => {
    if (Chat_Data.isSuccess == true) {
      dispatch(Add_NewChat({ type: 'bot', data: Chat_Data.message }));
    }
  }, [Chat_Data,dispatch]);

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }
  };

  const [localStorageInput, setLocalStorageInput] = useLocalStorage(
    'input',
    ''
  );

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value;
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || '';
      setInput(finalValue);
      adjustHeight();
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalStorageInput(input);
  }, [input, setLocalStorageInput]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([]);

  // =================================
  //
  // function to handle send message
  //
  // ===================================
  const handleSendMessage = async () => {
    console.log('time to send prompt---', input);
    let queryObject: any = {
      user_prompt: input,
    };

    dispatch(Add_NewChat({ type: 'user', data: { query: input } }));
    dispatch(ChatBotAPI(queryObject));

    setInput('');
    // clear input fields
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch(`/api/files/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const { url, pathname, contentType } = data;

        return {
          url,
          name: pathname,
          contentType: contentType,
        };
      } else {
        const { error } = await response.json();
        toast.error(error);
      }
    } catch (error) {
      toast.error('Failed to upload file, please try again!');
    }
  };

  return (
    <div className="relative w-full flex flex-col gap-4">
      {Chat_Message.length === 0 &&
        attachments.length === 0 &&
        uploadQueue.length === 0 && (
          <div className="grid sm:grid-cols-2 gap-2 w-full">
            {suggestedActions.map((suggestedAction, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.05 * index }}
                key={index}
                className={index > 1 ? 'hidden sm:block' : 'block'}
              >
                <Button
                  variant="ghost"
                  onClick={async () => {
                    window.history.replaceState({}, '', `/chat/${chatId}`);

                    append({
                      role: 'user',
                      content: suggestedAction.action,
                    });
                  }}
                  className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
                >
                  <span className="font-medium">{suggestedAction.title}</span>
                  <span className="text-muted-foreground">
                    {suggestedAction.label}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        )}

      <Textarea
        ref={textareaRef}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
        className={cx(
          'min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-xl text-base bg-muted',
          className
        )}
        rows={3}
        autoFocus
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (Chat_Data.isLoading) {
              toast.error('Please wait for the model to finish its response!');
            } else {
              handleSendMessage();
            }
          }
        }}
      />

      {/* send button */}
      <Button
        className="rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5 border dark:border-zinc-600"
        onClick={(event) => {
          event.preventDefault();
          if (Chat_Data.isLoading == false) {
            handleSendMessage();
          }
        }}
        disabled={input.length === 0 || Chat_Data.isLoading == true}
      >
        <ArrowUpIcon size={14} />
      </Button>
    </div>
  );
}
