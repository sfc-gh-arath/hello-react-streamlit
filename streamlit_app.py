from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Hello World - React on Streamlit")

# Serve the prebuilt React bundle (Community Cloud has no npm build step).
hello_react = components.declare_component(
    "hello_react", path=str(Path(__file__).parent / "frontend" / "build")
)

st.title("Hello World - st")
name = st.text_input("Your name", "World")

clicks = hello_react(name=name, default=0, key="hello")
st.write(f"React reported **{clicks}** clicks back to Python.")
