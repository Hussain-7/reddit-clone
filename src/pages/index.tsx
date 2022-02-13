import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useUser } from "../context/AuthContext";
import { listPosts } from "../graphql/queries";
import { API } from "aws-amplify";
import { Post, ListPostsQuery } from "../API";
import PostPreview from "../components/PostPreview";

export default function Home() {
  // Make a request to graphQl api
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  // Make a request to the GraphQL API
  useEffect(() => {
    const fetchPostsFromApi = async () => {
      const allPosts = (await API.graphql({ query: listPosts })) as {
        data: ListPostsQuery;
        error: any[];
      };
      if (allPosts.data) {
        setPosts(allPosts.data.listPosts.items as Post[]);
      } else {
        throw new Error("Could not get Posts");
      }
    };
    fetchPostsFromApi();
  }, []);

  console.log("Signed in user:", user);
  console.log("Post:", posts);
  return (
    <Container maxWidth="md">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Container>
  );
}

// Get all the posts on the server-side
// Since all users can read posts in out schema logic
// we can use the Api Key authorization method

// So we'll call some code to access our graphQl API on the serverside
// Pass it to out function as props
// Render the posts on the home page to look like reddit post.
