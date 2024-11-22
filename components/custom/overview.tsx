import { motion } from 'framer-motion';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        
        <p>
          This is an
          chatbot template built with Next.js and the AI SDK by Vercel. It uses
          the
        
          function in the server and the
          <code className="rounded-md bg-muted px-1 py-0.5">useChat</code> hook
        </p>
        
      </div>
    </motion.div>
  );
};
