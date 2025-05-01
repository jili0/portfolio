import Title from "@/components/Title";
import Table from "../components/Table";
import DetailedList from "../components/DetailedList";

export default function About() {
  return (
    <>
      <Title id="about" title="About my " subTitle="skills" />
      <Table />
      <DetailedList />
    </>
  );
}