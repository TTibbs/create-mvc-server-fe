import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Terminal } from "lucide-react";
import { toast } from "sonner";
import MacTerminal from "./MacTerminal";

const Installation = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-mvc-server");
    setCopied(true);
    toast.success("Command copied to clipboard!");

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto text-center mb-12"
      >
        <motion.div
          className="relative max-w-lg mx-auto mb-16 glass-effect rounded-lg overflow-hidden p-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between bg-black/40 rounded-tl-lg rounded-tr-lg px-4 py-3">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-zinc-200" />
              <span className="text-sm font-mono text-zinc-200">npm</span>
            </div>
            <motion.button
              onClick={handleCopy}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </motion.button>
          </div>
          <div className="bg-black/60 p-4 font-mono text-sm text-left rounded-br-lg rounded-bl-lg">
            <code className="text-zinc-200">npx create-mvc-server</code>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <MacTerminal title="create-mvc-server" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Installation;
