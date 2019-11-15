export const fetchBooks = () =>
  $.ajax({
    method: "GET",
    url: "api/books"
  });
  
export const fetchMembers = () =>
  $.ajax({
    method: "GET",
    url: "api/members"
  });


