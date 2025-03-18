
import React, { useState } from 'react';
import EmailSubscriptionDialog from './EmailSubscriptionDialog';

const EmailSubscription = () => {
  const [open, setOpen] = useState(false);

  return (
    <EmailSubscriptionDialog 
      open={open} 
      onOpenChange={setOpen} 
    />
  );
};

export default EmailSubscription;
