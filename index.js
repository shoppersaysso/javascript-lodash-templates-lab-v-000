function createPost() {
  var postAuthor = document.getElementById("postAuthor").value;
  var postTitle = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });
  var commentsDiv = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsDiv;
}



function postComment() {
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("comment").value;

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });
}
