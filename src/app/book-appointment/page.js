import BookAppointmentClient from "./BookAppointmentClient";

export const metadata = {
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.bestorthopaedicsurgeon.com.au/book-appointment",
  },
};

export default function Page() {
  return <BookAppointmentClient />;
}
