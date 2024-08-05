import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);


  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      {loading && <div>Loading ...</div>}
      {isError && <div>Something went wrong</div>}
      {!loading && <ContactList></ContactList>}
    </>
  );
}
