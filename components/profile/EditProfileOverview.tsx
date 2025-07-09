import React from 'react'
import ProfileAccountDetailComp from './ProfileAccountDetailComp';
import ProfileUploadPhotoComp from './ProfileUploadPhotoComp';

interface editProfileOverviewProps {
  section: string;
}

function EditProfileOverview({section}:editProfileOverviewProps) {

  const renderSectionContent = () => {

    switch (section) {
      case 'Photo':
        return <ProfileUploadPhotoComp/>;
      case 'Account Details':
        return <ProfileAccountDetailComp/>;
      case 'Work':
        return <div>Work Section</div>;
      case 'Payment':
        return <div>Payment Section</div>;
      case 'Security':
        return <div>Security Section</div>;
      default:
        return <div>Select a section to edit</div>;
    }
  }


  return (
    <>
    {  renderSectionContent()}
    </>
  )
}

export default EditProfileOverview