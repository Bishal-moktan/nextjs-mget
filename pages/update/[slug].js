import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from '@/styles/Write.module.css';

import { BsUpload } from 'react-icons/bs';

import { useEffect, useState } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchSinglePost, updateBlog } from '@/features/postSlice/postSlice';
import Head from 'next/head';

const Update = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const handleFileOnChange = (e) => {
    const img = e.target.files[0];
    transformFile(img);
  };

  const router = useRouter();
  const { slug: postId } = router.query;

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
  const { loading, singlePost, postComplete } = useSelector(
    (store) => store.post
  );
  const dispatch = useDispatch();
  const updatePost = () => {
    if (title === '') {
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

    dispatch(
      updateBlog({
        title: title,
        desc: value,
        date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        uid: user.id,
        postId,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchSinglePost(postId));
    setTitle(singlePost.title);
    setValue(singlePost.desc);
  }, []);

  if (postComplete) {
    router.replace('/blogs');
  }

  if (!user?.username) {
    return <Unauthorized />;
  }

  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY - Write</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className="container">
        <div className={styles.write}>
          <div className={styles.content}>
            <input
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              <h2>Update</h2>

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
              <button onClick={updatePost}>
                {loading ? 'Updating' : 'Update'}
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
export default Update;
