import React from 'react'
import SocialNetwork, { SocialNetworkName } from './components/SocialNetwork'
import style from './components/SocialNetworks.css'

const SocialNetworks: StorefrontFunctionComponent<
  SocialNetworksSchema
> = props => {
  return (
    <div className={`${style.socialNetworksContainer} nh2 flex`}>
      {props.socialNetworks.map(socialNetworkData => (
        <SocialNetwork {...socialNetworkData} />
      ))}
    </div>
  )
}

SocialNetworks.defaultProps = {
  socialNetworks: [],
  showInColor: false,
}

interface SocialNetworksSchema {
  socialNetworks: SocialNetworkData[]
  showInColor: boolean
}

interface SocialNetworkData {
  url: string
  name: SocialNetworkName
}

SocialNetworks.schema = {
  title: 'admin/editor.footer.socialNetworks.title',
  description: 'admin/editor.footer.socialNetworks.description',
  type: 'object',
  properties: {
    showInColor: {
      default: false,
      isLayout: true,
      title: 'admin/editor.footer.showSocialNetworksInColor.title',
      type: 'boolean',
    },
    socialNetworks: {
      title: 'admin/editor.footer.socialNetworks',
      type: 'array',
      minItems: 1,
      maxItems: 4,
      items: {
        title: 'admin/editor.footer.socialNetworks.title',
        type: 'object',
        properties: {
          url: {
            title: 'admin/editor.footer.socialNetworks.url.title',
            type: 'string',
          },
          name: {
            title: 'admin/editor.footer.socialNetworks.title',
            type: 'string',
            default: 'Facebook',
            enum: ['Facebook', 'Twitter', 'Instagram', 'Youtube'],
          },
        },
      },
    },
  },
}

export default SocialNetworks
