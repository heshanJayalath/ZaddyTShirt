import React, { Suspense, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Stage, useGLTF, Html } from '@react-three/drei';
import { backend_url } from '../../server';
import axios from 'axios';
import { server } from '../../server';

const ModelThree = () => {
  const [allProducts, setAllProducts] = useState([])
  const { id } = useParams();
  

  useEffect(() => {
    axios.get(`${server}/product/get-all-products`).then((res) => {
      setAllProducts(res.data.products);
    });
  }, [])

  console.log("all Products: ", allProducts);
  const releventdata = allProducts?.find((i) => i._id === id);

  console.log(releventdata)



  return (

    <div>

      <Suspense fallback={null}>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "position": "absolute" }}>
          <color attach="background" args={["#101010"]} />
          <PresentationControls speed={1.5} global zoom={0.2} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              {releventdata &&
                <Three scale={0.01} data={releventdata} />
              }
            </Stage>
          </PresentationControls>
        </Canvas>
      </Suspense>

    </div>
  )
}


const Three = ({ data }) => {

  const { scene } = useGLTF(`${backend_url}/${data.model && data?.model[0]}`);
  return (

    <primitive object={scene}/>

  )
}
export default ModelThree