'use strict'

import React from 'react'
import classnames from 'classnames'
import UrlSearchSelect from '../UrlSearchSelect'
import CountrySelect from '../CountrySelect'
import countries from '../CountrySelect/countries'
import getJSON from '../../lib/getJSON'
import apiRoutes from '../../api'
import i18nMixin from '../../mixins/i18n'
import i18n from './i18n'

const addressesSearchUrl = apiRoutes('addresses_search')
const addressUrl = apiRoutes('address')

export default React.createClass({
  displayName: 'AddressLookup',

  mixins: [i18nMixin],

  propTypes: {
    layout: React.PropTypes.string,
    spacing: React.PropTypes.string,
    selectedCountry: React.PropTypes.object,
    onChange: React.PropTypes.func
  },

  getDefaultProps () {
    return {
      selectedCountry: countries[0],
      onChange: () => {},
      layout: 'full',
      spacing: 'loose'
    }
  },

  getInitialState () {
    return {
      selectedCountry: this.props.selectedCountry,
      pendingRequest: null,
      address: null
    }
  },

  deserializeAddressesResponse (response) {
    return response.addresses.map((address) => {
      return {
        value: address.id,
        label: address.label
      }
    })
  },

  isPAFLookup: function () {
    return ((!!this.state.selectedCountry &&
        this.state.selectedCountry.value) === 'GB')
  },

  isGoogleLookup: function () {
    return !this.isPAFLookup()
  },

  getAddressUrl (id) {
    let addressBase = addressUrl.replace('{{ countryCode }}', this.state.selectedCountry.value)
    return `${addressBase}/${id}.jsonp`
  },

  fetchAddress (id) {
    let request = getJSON(this.getAddressUrl(id))
    request.then((response) => {
      let address = response.address
      if (this.isPAFLookup()) {
        address.paf_validated = true
      }
      this.setState({
        pendingRequest: null,
        address
      }, () => {
        this.props.onChange(address)
      })
    })
    return request
  },

  queueFetchAddress (id) {
    if (this.state.pendingRequest) {
      this.state.pendingRequest.cancel()
    }
    let request = this.fetchAddress(id)
    this.setState({
      pendingRequest: request
    })
    return request
  },

  handleAddressSelection (address) {
    this.queueFetchAddress(address.value)
  },

  handleCountrySelection (country) {
    this.setState({
      isSelectingCountry: false,
      selectedCountry: country
    })
  },

  handleCountrySelectOpen () {
    this.setState({
      isSelectingCountry: true
    })
  },

  render () {
    var classes = classnames([
      this.props.className,
      'hui-AddressLookup--' + this.props.layout,
      'hui-AddressLookup--' + this.props.spacing,
      'hui-AddressLookup'
    ])
    let urlSearchSelectClasses = classnames({
      'hui-AddressLookup_url-search-select': true,
      'hui-AddressLookup_url-search-select--inactive': this.state.isSelectingCountry
    })
    let countrySelectClasses = classnames({
      'hui-AddressLookup__country-select': true,
      'hui-AddressLookup__country-select--active': this.state.isSelectingCountry
    })
    return (
      <div className={ classes }>
        <UrlSearchSelect
          className={ urlSearchSelectClasses }
          url={ addressesSearchUrl + '.jsonp' }
          params={ { country_code: this.state.selectedCountry.value } }
          spacing="compact"
          manualActions={ this.props.manualActions }
          deserializeResponse={ this.deserializeAddressesResponse }
          onSelection={ this.handleAddressSelection } />
        <CountrySelect
          spacing="compact"
          className={ countrySelectClasses }
          value={ this.state.selectedCountry.value }
          onOpen={ this.handleCountrySelectOpen }
          onSelection={ this.handleCountrySelection } />
      </div>
    )
  },

  statics: {
    i18n
  }
})
