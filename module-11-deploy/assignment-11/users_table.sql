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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_name character varying(255) NOT NULL,
    user_email character varying(255) NOT NULL,
    user_password character varying NOT NULL,
    user_role character varying NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, user_name, user_email, user_password, user_role) FROM stdin;
ae5d200c-c682-48d5-98fd-ccf5fa8337ab	EditorUser	editor@example.com	$2b$10$yQDTfeefRSdcsxpueNWpL.zuJQHLqHBffAj/1vsYZjitkqK/JI0jO	editor
8cbb2185-09a9-41e3-a72d-20821e01b932	Nancy	nancy@test.com	$2b$10$z8LvBUnwue.enik5VTM.AupnczbQShRYA0Icjxq1oNCBo5rQnsYLy	user
f0c77c3c-5c2d-4231-92a5-f7a954b12e0d	Lee	lee@test.com	$2b$10$cq0GwR78u9Y5hb5DhVfBtubTRdDp5Pai1YHU.9NBmnhqpJVWg0X7u	user
606e90b2-57da-4d25-bc28-bd2abe1e1f66	AdminUser	admin@example.com	$2b$10$Lf4Mt7o27vQql0/l0cKve.8/lJebioW.Rl3TqMbCQLFcNoqK07KkS	admin
\.


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

