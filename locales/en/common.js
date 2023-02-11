/* eslint-disable */
const { DOMAIN_VALIDATIONS } = require('@/lib/validations/localeValidations.ts')

module.exports = {
  [DOMAIN_VALIDATIONS]: {
    mixed: {
      required: 'This field is required',
    },
    string: {
      length: 'This field must be exactly {{length}} characters',
      min: 'This field must be at least {{min}} characters',
      max: 'This field must be at most {{max}} characters',
      matches: "This field must match the following: '{{regex}}'",
      email: 'This field must be a valid email',
      trim: 'This field must be a trimmed string',
      lowercase: 'This field must be a lowercase string',
      uppercase: 'This field must be a upper case string',
    },
    number: {
      min: 'This field must be greater than or equal to {{min}}',
      max: 'This field must be less than or equal to {{max}}',
      lessThan: 'This field must be less than {{less}}',
      moreThan: 'This field must be greater than {{more}}',
      positive: 'This field must be a positive number',
      negative: 'This field must be a negative number',
      type: 'This field must be a number',
    },
    date: {
      min: 'This field must be later than {{label}}',
      max: 'This field must be at earlier than {{label}}',
      between: 'This field must be between {{min}} and {{max}}',
    },
    boolean: {
      isValue: 'This field must be {{value}}',
    },
    object: {
      noUnknown: 'This field has unspecified keys: {{unknown}]',
    },
    array: {
      min: 'This field must have at least {{min}} items',
      max: 'This field must have less than or equal to {{max}} items',
      length: 'This field must be have {{length}} items',
    },
  },
  successMessages: {
    create: '{{key}} is created successfully',
    edit: '{{key}} is updated successfully',
    copy: '{{key}} is copied successfully',
    import: '{{key}} is imported successfully',
    delete: '{{key}} is deleted successfully',
    keys: {
      foodAidRequest: 'Food Aid Request',
    },
  },
  errorMessages: {
    anErrorOccurred: 'Something went wrong. Please try again later.',
  },
  warningMessages: {
    requestForHelpAgain:
      "If you've already submitted this help request, please don't resubmit it. Duplicate information in records adversely affects rescue operations.",
    requiredFieldsAreMandatory: '* fields are mandatory.',
    noPersonalHealthInformation:
      'Please do no enter personal or health information, ',
    noPersonalHealthInformationAddonAddress: 'only enter your address details.',
    noPersonalHealthInformationAddonPhysicalCondition:
      'only enter your condition.',
    noPersonalHealthInformationAddonHelpInfo:
      'sadece yardım hakkında bilgi giriniz.',
  },
  requiredFieldsNotice: 'Fields marked with * are required.',
  submit: 'Submit',
  filter: 'Filter',
  kvkk: 'Within the scope of KVKK No. 6698, “We collect the name, surname, contact information, log record and location data of the earthquake victim entered into the system and made public by them from the users who registered in our application as earthquake victims or relatives of earthquake victims.” Would you like to visit the <0>Clarification Text</0> to see our data processing legal grounds, purposes and learn about your rights?',
  inputFields: {
    fullName: 'Name Surname',
    phone: 'Phone Number',
    peopleCount: 'People Count',
    address: 'Address',
    addressDetail: 'Adres Detail',
    physicalConditions: {
      normal: 'Normal',
      mid: 'Orta',
      critical: 'Critical',
    },
    physicalConditionDetail: 'Information about physical condition',
    tweetUrl: 'Tweet Link',
    transportationStatus: {
      exists: 'Aracım var, yardımı kendim teslim alabilirim.',
      noneExists: 'Aracım yok, yardımın teslim edilmesi gerek.',
    },
    termsAcceptedLabel: 'I read and accepted the conditions.',
    helpCity: 'Yardım verebileceğin şehir',
    helpInfo: 'Yardımın hakkında bilgi',
  },
  pageHeaders: {
    underDebrisPage: 'Ben / Tandığım Enkaz Altında',
    needFoodPage: 'Gıdaya İhtiyacım Var',
    needToWarmPage: 'Isınmaya İhtiyacım Var',
    helpListUnderDebris: 'Those Under Debris',
    helpListNeedFood: 'Those Need Food',
    helpListNeedToGetWarm: 'Those Need to Get Warm',
    canUseConstructionMachinePage: 'İş Makinesi Yardımı Sağla',
    giveHelpPage: 'Yardım Sağla',
    getHelpPage: 'Yardım Al',
  },
  lookAtTheRecordsPage: 'Go to the <0>Current Records</0>',
}
