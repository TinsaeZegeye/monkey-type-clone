import Image from "next/image";
import ConfigurationOption from "../../components/ConfigurationOption";
import TypeTest from "../../components/TypeTest";

export default function Home() {
  return (
	<div className=''>
		<ConfigurationOption/>	
		<TypeTest/>
    </div>
  );
}
