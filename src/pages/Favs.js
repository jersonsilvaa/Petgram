import React from "react";
import { RenderProp } from "../hooks/useGetFavorites";
import { Layout } from "../components/Layout"

export default () => (
    <>
    <Layout title="Tus Favoritos" subtitle="Aquí encontrarás tus fotos favoritas">
        <RenderProp />
    </Layout>
    </>
)