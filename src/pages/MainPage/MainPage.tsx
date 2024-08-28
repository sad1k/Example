import { Header } from "components/Header/Header";
import { FirstBlock } from "components/FirstBlock/FirstBlock";
import { IconsPanel } from "components/IconsPanel/IconsPanel";
import { InfoSection } from "components/InfoSection/InfoSection";
import { ModelSection } from "components/ModelSection/ModelSection";
import { ServicesSection } from "components/ServicesSection/ServicesSection";
import { DetailSection } from "components/DetailSection/DetailSection";
import { StatisticSection } from "components/StatisticSection/StatisticSection";
import { FormSection } from "components/FormSection/FormSection";
import { ReviewSection } from "components/ReviewSection/ReviewSection";
import { ConsultSection } from "components/ConsultSection/ConsultSection";
import { OfferSection } from "components/OfferSection/OfferSection";
import styles from "./MainPage.module.scss";
import { Footer } from "components/Footer/Footer";
import { Modal } from "components/Modal/Modal";
import { Accept } from "components/Accept/Accept";
import { useState } from "react";

export interface IOpenModal {
  openModal: (field: JSX.Element) => void;
}

export const MainPage = () => {
  const [modalField, setFieldModal] = useState<JSX.Element | null>(null);
  const [open, setOpen] = useState(false);
  const [openAccept, setOpenAccept] = useState(false);

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleField = (field: JSX.Element) => {
    setFieldModal(field);
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false);
    console.log("submit");
    setOpenAccept(true);
  };

  return (
    <>
      <div>
        <Header openModal={handleField} />
        <main className="main">
          <FirstBlock openModal={handleField} />
          <IconsPanel />
          <div className={styles.background}>
            <InfoSection />
            <ModelSection openModal={handleField} />
            <ServicesSection openModal={handleField} />
            <DetailSection />
          </div>
          <StatisticSection />
          <FormSection openModal={handleField} />
          <ReviewSection />
          <ConsultSection openModal={handleField} />
          <OfferSection />
          <div className={styles.footer}>
            <Header openModal={handleField} isFooter={true} />
          </div>
        </main>
        <Footer />
        {modalField ? (
          <Modal
            open={open}
            onSubmit={handleSubmit}
            onClose={handleCloseModal}
            OtherField={modalField}
          />
        ) : (
          ""
        )}
        {openAccept ? (
          <Accept open={openAccept} handleClose={handleCloseAccept} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
