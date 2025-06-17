--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: blogSchema; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "blogSchema";


ALTER SCHEMA "blogSchema" OWNER TO postgres;

--
-- Name: userLoginSchema; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "userLoginSchema";


ALTER SCHEMA "userLoginSchema" OWNER TO postgres;

--
-- Name: userSchema; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "userSchema";


ALTER SCHEMA "userSchema" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blogs; Type: TABLE; Schema: blogSchema; Owner: postgres
--

CREATE TABLE "blogSchema".blogs (
    blog_id integer NOT NULL,
    title character varying NOT NULL,
    blog_content character varying NOT NULL,
    author character varying NOT NULL,
    "createAt" date[]
);


ALTER TABLE "blogSchema".blogs OWNER TO postgres;

--
-- Name: blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogs (
    blog_id integer NOT NULL,
    title text NOT NULL,
    blog_content text NOT NULL,
    author text NOT NULL,
    created date
);


ALTER TABLE public.blogs OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username text NOT NULL,
    email text NOT NULL,
    user_password text NOT NULL,
    created date,
    blog_id integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: userLogin; Type: TABLE; Schema: userLoginSchema; Owner: postgres
--

CREATE TABLE "userLoginSchema"."userLogin" (
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE "userLoginSchema"."userLogin" OWNER TO postgres;

--
-- Name: userLogin; Type: TABLE; Schema: userSchema; Owner: postgres
--

CREATE TABLE "userSchema"."userLogin" (
    username text NOT NULL,
    password text NOT NULL
);


ALTER TABLE "userSchema"."userLogin" OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: userSchema; Owner: postgres
--

CREATE TABLE "userSchema".users (
    user_id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    created date
);


ALTER TABLE "userSchema".users OWNER TO postgres;

--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: blogSchema; Owner: postgres
--

ALTER TABLE ONLY "blogSchema".blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (blog_id);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (blog_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: userSchema; Owner: postgres
--

ALTER TABLE ONLY "userSchema".users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

