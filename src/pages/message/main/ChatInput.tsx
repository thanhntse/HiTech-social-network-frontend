import
React,
{
  useEffect,
  useRef,
  useState
} from 'react';
import Picker from 'emoji-picker-react';
import {
  IconButton
} from '@mui/material';
import {
  File,
  Paperclip,
  Send,
  Smile,
  X
} from 'lucide-react';
import RenderIf from '../../../components/RenderIf';
import { useTranslation } from 'react-i18next';

const ChatInput: React.FC = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleEmojiClick = (emojiObject: any) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  const send = () => {
    console.log('Message submitted:', message);
    setMessage('');
  }

  return (
    <>
      <div className="relative flex items-center justify-between py-1 px-2 gap-2">

        <div className="flex flex-col items-center">
          <label className="relative">
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
            />
            <IconButton
              component="span"
              sx={{ p: 1 }}
              className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
            >
              <Paperclip
                className='w-5 h-5'
              />
            </IconButton>
          </label>
        </div>

        <RenderIf
          ifTrue={file !== null}
        >
          <div
            className='relative text-txt-primary-light dark:text-txt-primary-dark flex flex-col justify-center items-center'
          >
            <File
              className='w-20 h-20'
              strokeWidth={1}
            />
            <span
              className='text-[8px] leading-none truncate max-w-16'
            >
              {file?.name}
            </span>
            <span
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold uppercase'
            >
              {file?.name.split('.').pop()}
            </span>
            <IconButton
              className='absolute top-0 right-0 p-px text-red-500 hover:bg-red-50 dark:hover:bg-red-950'
              onClick={
                () => setFile(null)
              }
            >
              <X
                className='w-4 h-4'
              />
            </IconButton>
          </div>
        </RenderIf>

        <textarea
          ref={textareaRef}
          className="flex-1 border-none focus:outline-none resize-none font-primary bg-white dark:bg-bg-secondary-dark text-sm font-medium text-txt-primary-light placeholder:text-txt-primary-light placeholder:dark:text-txt-primary-dark placeholder:text-opacity-50 dark:text-txt-primary-dark max-h-40"
          placeholder={t('writeYourMessage')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />

        <IconButton
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className='text-txt-primary-light dark:text-txt-primary-dark hover:bg-primary-light dark:hover:bg-bg-primary-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300 ease-in-out'
        >
          <Smile
            className='w-5 h-5'
          />
        </IconButton>

        <IconButton
          className='rounded-md bg-primary text-white w-10 h-10 disabled:bg-opacity-70 dark:disabled:bg-opacity-50'
          onClick={send}
          disabled={!message && file === null}
        >
          <Send
            className='w-5 h-5'
          />
        </IconButton>

        <RenderIf
          ifTrue={showEmojiPicker}
        >
          <div className="absolute bottom-14 right-0">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        </RenderIf>
      </div>
    </>
  );
};

export default ChatInput;
