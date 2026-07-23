/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkmailUserConfig extends cdktn.TerraformMetaArguments {
  /**
  * City where the user is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#city WorkmailUser#city}
  */
  readonly city?: string;
  /**
  * Company associated with the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#company WorkmailUser#company}
  */
  readonly company?: string;
  /**
  * Country where the user is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#country WorkmailUser#country}
  */
  readonly country?: string;
  /**
  * Department associated with the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#department WorkmailUser#department}
  */
  readonly department?: string;
  /**
  * Display name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}
  */
  readonly displayName: string;
  /**
  * Primary email address used to register the user with WorkMail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#email WorkmailUser#email}
  */
  readonly email: string;
  /**
  * First name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Whether to hide the user from the global address list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}
  */
  readonly hiddenFromGlobalAddressList?: boolean | cdktn.IResolvable;
  /**
  * User ID from IAM Identity Center associated with the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}
  */
  readonly identityProviderUserId?: string;
  /**
  * Initials of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#initials WorkmailUser#initials}
  */
  readonly initials?: string;
  /**
  * Job title of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}
  */
  readonly jobTitle?: string;
  /**
  * Last name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}
  */
  readonly lastName?: string;
  /**
  * Username of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#name WorkmailUser#name}
  */
  readonly name: string;
  /**
  * Office where the user is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#office WorkmailUser#office}
  */
  readonly office?: string;
  /**
  * Identifier of the WorkMail organization where the user is managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}
  */
  readonly organizationId: string;
  /**
  * Password to set for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#password WorkmailUser#password}
  */
  readonly password?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#region WorkmailUser#region}
  */
  readonly region?: string;
  /**
  * Street address of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#street WorkmailUser#street}
  */
  readonly street?: string;
  /**
  * Telephone number of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}
  */
  readonly telephone?: string;
  /**
  * Role assigned to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}
  */
  readonly userRole?: string;
  /**
  * ZIP or postal code of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}
  */
  readonly zipCode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user aws_workmail_user}
*/
export class WorkmailUser extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workmail_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkmailUser to import
  * @param importFromId The id of the existing WorkmailUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkmailUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_workmail_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user aws_workmail_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkmailUserConfig
  */
  public constructor(scope: Construct, id: string, config: WorkmailUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workmail_user',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.56.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._city = config.city;
    this._company = config.company;
    this._country = config.country;
    this._department = config.department;
    this._displayName = config.displayName;
    this._email = config.email;
    this._firstName = config.firstName;
    this._hiddenFromGlobalAddressList = config.hiddenFromGlobalAddressList;
    this._identityProviderUserId = config.identityProviderUserId;
    this._initials = config.initials;
    this._jobTitle = config.jobTitle;
    this._lastName = config.lastName;
    this._name = config.name;
    this._office = config.office;
    this._organizationId = config.organizationId;
    this._password = config.password;
    this._region = config.region;
    this._street = config.street;
    this._telephone = config.telephone;
    this._userRole = config.userRole;
    this._zipCode = config.zipCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
  }

  // disabled_date - computed: true, optional: false, required: false
  public get disabledDate() {
    return this.getStringAttribute('disabled_date');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enabled_date - computed: true, optional: false, required: false
  public get enabledDate() {
    return this.getStringAttribute('enabled_date');
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // hidden_from_global_address_list - computed: true, optional: true, required: false
  private _hiddenFromGlobalAddressList?: boolean | cdktn.IResolvable; 
  public get hiddenFromGlobalAddressList() {
    return this.getBooleanAttribute('hidden_from_global_address_list');
  }
  public set hiddenFromGlobalAddressList(value: boolean | cdktn.IResolvable) {
    this._hiddenFromGlobalAddressList = value;
  }
  public resetHiddenFromGlobalAddressList() {
    this._hiddenFromGlobalAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenFromGlobalAddressListInput() {
    return this._hiddenFromGlobalAddressList;
  }

  // identity_provider_identity_store_id - computed: true, optional: false, required: false
  public get identityProviderIdentityStoreId() {
    return this.getStringAttribute('identity_provider_identity_store_id');
  }

  // identity_provider_user_id - computed: false, optional: true, required: false
  private _identityProviderUserId?: string; 
  public get identityProviderUserId() {
    return this.getStringAttribute('identity_provider_user_id');
  }
  public set identityProviderUserId(value: string) {
    this._identityProviderUserId = value;
  }
  public resetIdentityProviderUserId() {
    this._identityProviderUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderUserIdInput() {
    return this._identityProviderUserId;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // job_title - computed: false, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // mailbox_deprovisioned_date - computed: true, optional: false, required: false
  public get mailboxDeprovisionedDate() {
    return this.getStringAttribute('mailbox_deprovisioned_date');
  }

  // mailbox_provisioned_date - computed: true, optional: false, required: false
  public get mailboxProvisionedDate() {
    return this.getStringAttribute('mailbox_provisioned_date');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // office - computed: false, optional: true, required: false
  private _office?: string; 
  public get office() {
    return this.getStringAttribute('office');
  }
  public set office(value: string) {
    this._office = value;
  }
  public resetOffice() {
    this._office = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeInput() {
    return this._office;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // street - computed: false, optional: true, required: false
  private _street?: string; 
  public get street() {
    return this.getStringAttribute('street');
  }
  public set street(value: string) {
    this._street = value;
  }
  public resetStreet() {
    this._street = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetInput() {
    return this._street;
  }

  // telephone - computed: false, optional: true, required: false
  private _telephone?: string; 
  public get telephone() {
    return this.getStringAttribute('telephone');
  }
  public set telephone(value: string) {
    this._telephone = value;
  }
  public resetTelephone() {
    this._telephone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephoneInput() {
    return this._telephone;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_role - computed: true, optional: true, required: false
  private _userRole?: string; 
  public get userRole() {
    return this.getStringAttribute('user_role');
  }
  public set userRole(value: string) {
    this._userRole = value;
  }
  public resetUserRole() {
    this._userRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleInput() {
    return this._userRole;
  }

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city: cdktn.stringToTerraform(this._city),
      company: cdktn.stringToTerraform(this._company),
      country: cdktn.stringToTerraform(this._country),
      department: cdktn.stringToTerraform(this._department),
      display_name: cdktn.stringToTerraform(this._displayName),
      email: cdktn.stringToTerraform(this._email),
      first_name: cdktn.stringToTerraform(this._firstName),
      hidden_from_global_address_list: cdktn.booleanToTerraform(this._hiddenFromGlobalAddressList),
      identity_provider_user_id: cdktn.stringToTerraform(this._identityProviderUserId),
      initials: cdktn.stringToTerraform(this._initials),
      job_title: cdktn.stringToTerraform(this._jobTitle),
      last_name: cdktn.stringToTerraform(this._lastName),
      name: cdktn.stringToTerraform(this._name),
      office: cdktn.stringToTerraform(this._office),
      organization_id: cdktn.stringToTerraform(this._organizationId),
      password: cdktn.stringToTerraform(this._password),
      region: cdktn.stringToTerraform(this._region),
      street: cdktn.stringToTerraform(this._street),
      telephone: cdktn.stringToTerraform(this._telephone),
      user_role: cdktn.stringToTerraform(this._userRole),
      zip_code: cdktn.stringToTerraform(this._zipCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city: {
        value: cdktn.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktn.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktn.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      department: {
        value: cdktn.stringToHclTerraform(this._department),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktn.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktn.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden_from_global_address_list: {
        value: cdktn.booleanToHclTerraform(this._hiddenFromGlobalAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identity_provider_user_id: {
        value: cdktn.stringToHclTerraform(this._identityProviderUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initials: {
        value: cdktn.stringToHclTerraform(this._initials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_title: {
        value: cdktn.stringToHclTerraform(this._jobTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktn.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      office: {
        value: cdktn.stringToHclTerraform(this._office),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktn.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street: {
        value: cdktn.stringToHclTerraform(this._street),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      telephone: {
        value: cdktn.stringToHclTerraform(this._telephone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_role: {
        value: cdktn.stringToHclTerraform(this._userRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zip_code: {
        value: cdktn.stringToHclTerraform(this._zipCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
