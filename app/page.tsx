"use client";
import Image from "next/image";
import { useQuery } from "react-query";
import { fetchCountries } from "@/lib/action";
import CountryCard from "@/components/CountryCard";
import { CountryProp } from "@/components/CountryCard";

export default function Home() {
  const { isLoading, error, data } = useQuery<CountryProp[]>("countries", () =>
    fetchCountries()
  );
  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <>
      <div className="flex flex-wrap justify-evenly px-20">
        {data?.map((val) => {
          return (
            <>
              <CountryCard
                flags={val.flags}
                population={val.population}
                region={val.region}
                capital={val.capital}
                name={val.name}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
