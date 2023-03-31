import 'react-quill/dist/quill.snow.css';

import styles from '@/styles/Write.module.css';

import { BsUpload } from 'react-icons/bs';

import { useState } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postBlog } from '@/features/postSlice/postSlice';
import Unauthorized from '@/components/Unauthorized';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const Write = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const handleFileOnChange = (e) => {
    const img = e.target.files[0];
    transformFile(img);
  };

  const router = useRouter();

  const transformFile = (img) => {
    const reader = new FileReader();

    if (img) {
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        setFile(reader.result);
      };
    } else {
      setFile('');
    }
  };

  const { user } = useSelector((store) => store.auth);
  const { loading, postComplete } = useSelector((store) => store.post);
  const { metaContent, title } = useSelector((store) => store.content);
  const dispatch = useDispatch();
  const handlePost = (e) => {
    if (inputTitle === '') {
      toast.warning('Title cannot be empty', {
        position: 'bottom-left',
      });
      return;
    }
    if (value === '') {
      toast.warning('Description cannot be empty', {
        position: 'bottom-left',
      });
      return;
    }
    if (file === null) {
      toast.warning('Please provide an image', {
        position: 'bottom-left',
      });
      return;
    }

    dispatch(
      postBlog({
        inputTitle,
        desc: value,
        img: file,
        date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        uid: user.id,
      })
    );
  };

  if (postComplete) {
    router.replace('/blogs');
  }

  if (!user?.username) {
    return <Unauthorized />;
  }

  return (
    <>
      <Head>
        <title>{title} - Write</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className="container">
        <div className={styles.write}>
          <div className={styles.content}>
            <input
              type="text"
              placeholder="Title..."
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <div className={styles.editorContainer}>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className={styles.editor}
              />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.publish}>
              <h2>Publish</h2>

              <div className={styles.file}>
                <input
                  // style={{ display: 'none' }}
                  type="file"
                  accept="image/"
                  id="img"
                  onChange={handleFileOnChange}
                />
                <label htmlFor="img">
                  Upload
                  <BsUpload />
                </label>
              </div>
              <button onClick={handlePost}>
                {loading ? 'Posting' : 'Post'}
              </button>
            </div>
            {/* <div className={styles.category}>
              <h2>Cataegory</h2>
              <div className={styles.item}>
                <input name="category" type="radio" id="art" value="art" />
                <label htmlFor="art">Art</label>
              </div>
              <div className={styles.item}>
                <input
                  name="category"
                  type="radio"
                  id="science"
                  value="science"
                />
                <label htmlFor="science">Science</label>
              </div>
              <div className={styles.item}>
                <input
                  name="category"
                  type="radio"
                  id="technology"
                  value="technology"
                />
                <label htmlFor="technology">Technology</label>
              </div>
              <div className={styles.item}>
                <input
                  name="category"
                  type="radio"
                  id="cinema"
                  value="cinema"
                />
                <label htmlFor="cinema">Cinema</label>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};
export default Write;
