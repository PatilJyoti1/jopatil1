const posts = [];
let lastActivityTime = new Date();

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: NO POSTS FOUND");
      }
    }, 1000);
  });
}

console.log("Before Creating post 4, user lastActivityTime =", lastActivityTime);

createPost({ title: "Post 1" })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("After Creating post 1 >>>>>>>>");
    console.log("posts >>", posts);
    console.log("USER last activity time", lastActivityTime.getTime());
    return createPost({ title: "Post 2" });
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("After Creating post 2 >>>>>>>>");
    console.log("posts >>", posts);
    console.log("USER last activity time", lastActivityTime.getTime());
    return createPost({ title: "Post 3" });
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("After Creating post 3 >>>>>>>>");
    console.log("posts >>", posts);
    console.log("USER last activity time", lastActivityTime.getTime());
    return createPost({ title: "Post 4" });
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("After Creating post 4 >>>>>>>>");
    console.log("posts >>", posts);
    console.log("USER last activity time", lastActivityTime.getTime());
    return deleteLastPost();
  })
  .then(() => {
    console.log("After Deleting the last post >>>>>>>>");
    console.log("posts >>", posts);
  })
  .catch((error) => {
    console.log(error);
  });
