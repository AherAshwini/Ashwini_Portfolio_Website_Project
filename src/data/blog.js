import { links } from './links.js'

// IMPORTANT: individual Medium post titles, URLs, and dates could not be
// verified — the Medium profile page couldn't be fetched in this session
// (network/provenance restrictions), and no post-level data exists anywhere
// in this project's history to fall back on. Rather than invent post
// titles/links, `posts` is left empty and the Blog section below renders a
// single verified CTA to the real profile (`links.medium`). Send the real
// post titles + URLs (or unblock fetching the profile) to populate individual
// cards here.
export const posts = []

export const blogProfileUrl = links.medium
