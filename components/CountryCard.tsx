import React from "react";
import Link from "next/link";
import Image from "next/image";
export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
export interface NativeName {
  [key: string]: {
    official: string;
    common: string;
  };
}

interface Currency {
  name: string;
  symbol: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Flags {
  png: string;
  svg: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CountryProp {
  name?: Name;
  tld?: string[]; // Property for top-level domain
  topLevelDomain?: string[];
  population?: number;
  currencies?: {
    [key: string]: Currency;
  };
  languages?: {
    [key: string]: string;
  };
  region?: string;
  subregion?: string;
  maps?: Maps;
  capital?: string[];
  flags: Flags; // Property for country flag image
  coatOfArms?: CoatOfArms; // Property for country coat of arms image
}

type Props = {};

export default function CountryCard(props: CountryProp) {
  return (
    <Link
      href={`/`}
      className="w-[300px] h-[300px] mt-10 rounded-lg border-opacity-100 border-2 shadow-xl"
    >
      <ImageComponent src={props?.flags.svg} />
      <div className="flex  flex-col items-center">
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </Link>
  );
}

function ImageComponent({ src }: { src: string }) {
  return (
    <>
      <Image
        className="border-collapse p-3 lg:text-xl md:text-2xl sm:text-3xl text-4xl w-full h-[180px]"
        src={src}
        alt="default-Image"
        width={0}
        height={0}
      />
    </>
  );
}
