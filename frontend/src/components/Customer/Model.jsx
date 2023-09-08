import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { backend_url } from '../../server';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions/product';

const Three = ({props,data}) => {
    
    console.log("sele:", data.model[0]);
    const { scene } = useGLTF(`${backend_url}/${data.model && data?.model[0]}`);
    return (<primitive object={scene} {...props} />)
}

const Model = ({allProducts}) => {
    const [data, setData] =useState();
    const { id } = useParams();
    

    useEffect(() => {
        const releventdata = allProducts && allProducts.find((i) => i._id === id);
        setData(releventdata);
        console.log("relevant: ",releventdata.model[0]);
    },[data,allProducts]);

    return (
        <Suspense>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "position": "absolute" }}>
                <color attach="background" args={["#101010"]} />
                <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null}>
                        <Three scale={0.01} data={data}/>
                    </Stage>
                </PresentationControls>
            </Canvas>
        </Suspense>
    )
}

export default Model