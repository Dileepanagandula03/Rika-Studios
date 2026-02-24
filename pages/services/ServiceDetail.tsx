
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import { CheckCircle2, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import LeadGenSection from '../../components/LeadGenSection';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" />;
  }

  if (service.id === 'lead-generation') {
    return <LeadGenSection />;
  }
};

export default ServiceDetail;
