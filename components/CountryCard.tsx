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
  name: Name;
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
      className="w-[500px] h-fit sm:w-[400px] ] md:w-[300px] mt-10 rounded-lg border-opacity-100 border-2 shadow-xl dark:border-slate-600 overflow-hidden cursor-pointer"
    >
      <ImageComponent src={props?.flags.svg} />
      <div className="text-2xl font-bold mt-1 ml-2">{props.name?.common}</div>
      <div className="flex flex-col mt-5 ml-10 font-bold text-3lx gap-4 md:gap-2">
        <div>
          Population <span className="text-slate-100">:</span>{" "}
          <span>{props.population}</span>
        </div>
        <div>
          Region <span className="text-slate-100">:</span>{" "}
          <span>{props.region}</span>
        </div>
        <div>
          Capital <span className="text-slate-100">:</span>{" "}
          <span>{props.capital}</span>
        </div>
      </div>
    </Link>
  );
}

function ImageComponent({ src }: { src: string }) {
  return (
    <div className="relative">
      <Image
        className="lg:text-xl md:text-2xl sm:text-3xl text-4xl p-2 w-full h-[180px] transition-transform duration-300 transform hover:scale-110"
        src={src}
        alt="default-Image"
        width={0}
        height={0}
      />
    </div>
  );
}
