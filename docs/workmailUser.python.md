# `workmailUser` Submodule <a name="`workmailUser` Submodule" id="@cdktn/provider-aws.workmailUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailUser <a name="WorkmailUser" id="@cdktn/provider-aws.workmailUser.WorkmailUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user aws_workmail_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer"></a>

```python
from cdktn_provider_aws import workmail_user

workmailUser.WorkmailUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  email: str,
  name: str,
  organization_id: str,
  city: str = None,
  company: str = None,
  country: str = None,
  department: str = None,
  first_name: str = None,
  hidden_from_global_address_list: bool | IResolvable = None,
  identity_provider_user_id: str = None,
  initials: str = None,
  job_title: str = None,
  last_name: str = None,
  office: str = None,
  password: str = None,
  region: str = None,
  street: str = None,
  telephone: str = None,
  user_role: str = None,
  zip_code: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.email">email</a></code> | <code>str</code> | Primary email address used to register the user with WorkMail. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.name">name</a></code> | <code>str</code> | Username of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | Identifier of the WorkMail organization where the user is managed. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.city">city</a></code> | <code>str</code> | City where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.company">company</a></code> | <code>str</code> | Company associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.country">country</a></code> | <code>str</code> | Country where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.department">department</a></code> | <code>str</code> | Department associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | First name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.hiddenFromGlobalAddressList">hidden_from_global_address_list</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to hide the user from the global address list. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.identityProviderUserId">identity_provider_user_id</a></code> | <code>str</code> | User ID from IAM Identity Center associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.initials">initials</a></code> | <code>str</code> | Initials of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.jobTitle">job_title</a></code> | <code>str</code> | Job title of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Last name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.office">office</a></code> | <code>str</code> | Office where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.password">password</a></code> | <code>str</code> | Password to set for the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.street">street</a></code> | <code>str</code> | Street address of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.telephone">telephone</a></code> | <code>str</code> | Telephone number of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.userRole">user_role</a></code> | <code>str</code> | Role assigned to the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.zipCode">zip_code</a></code> | <code>str</code> | ZIP or postal code of the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.email"></a>

- *Type:* str

Primary email address used to register the user with WorkMail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#email WorkmailUser#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.name"></a>

- *Type:* str

Username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#name WorkmailUser#name}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.organizationId"></a>

- *Type:* str

Identifier of the WorkMail organization where the user is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.city"></a>

- *Type:* str

City where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#city WorkmailUser#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.company"></a>

- *Type:* str

Company associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#company WorkmailUser#company}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.country"></a>

- *Type:* str

Country where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#country WorkmailUser#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.department"></a>

- *Type:* str

Department associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#department WorkmailUser#department}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.firstName"></a>

- *Type:* str

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}

---

##### `hidden_from_global_address_list`<sup>Optional</sup> <a name="hidden_from_global_address_list" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.hiddenFromGlobalAddressList"></a>

- *Type:* bool | cdktn.IResolvable

Whether to hide the user from the global address list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}

---

##### `identity_provider_user_id`<sup>Optional</sup> <a name="identity_provider_user_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.identityProviderUserId"></a>

- *Type:* str

User ID from IAM Identity Center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.initials"></a>

- *Type:* str

Initials of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#initials WorkmailUser#initials}

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.jobTitle"></a>

- *Type:* str

Job title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lastName"></a>

- *Type:* str

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.office"></a>

- *Type:* str

Office where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#office WorkmailUser#office}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.password"></a>

- *Type:* str

Password to set for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#password WorkmailUser#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#region WorkmailUser#region}

---

##### `street`<sup>Optional</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.street"></a>

- *Type:* str

Street address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#street WorkmailUser#street}

---

##### `telephone`<sup>Optional</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.telephone"></a>

- *Type:* str

Telephone number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.userRole"></a>

- *Type:* str

Role assigned to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.zipCode"></a>

- *Type:* str

ZIP or postal code of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany">reset_company</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment">reset_department</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList">reset_hidden_from_global_address_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId">reset_identity_provider_user_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle">reset_job_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice">reset_office</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet">reset_street</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone">reset_telephone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole">reset_user_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_city` <a name="reset_city" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_company` <a name="reset_company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany"></a>

```python
def reset_company() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_department` <a name="reset_department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment"></a>

```python
def reset_department() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_hidden_from_global_address_list` <a name="reset_hidden_from_global_address_list" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList"></a>

```python
def reset_hidden_from_global_address_list() -> None
```

##### `reset_identity_provider_user_id` <a name="reset_identity_provider_user_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId"></a>

```python
def reset_identity_provider_user_id() -> None
```

##### `reset_initials` <a name="reset_initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_job_title` <a name="reset_job_title" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle"></a>

```python
def reset_job_title() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_office` <a name="reset_office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice"></a>

```python
def reset_office() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_street` <a name="reset_street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet"></a>

```python
def reset_street() -> None
```

##### `reset_telephone` <a name="reset_telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone"></a>

```python
def reset_telephone() -> None
```

##### `reset_user_role` <a name="reset_user_role" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole"></a>

```python
def reset_user_role() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode"></a>

```python
def reset_zip_code() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct"></a>

```python
from cdktn_provider_aws import workmail_user

workmailUser.WorkmailUser.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement"></a>

```python
from cdktn_provider_aws import workmail_user

workmailUser.WorkmailUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource"></a>

```python
from cdktn_provider_aws import workmail_user

workmailUser.WorkmailUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport"></a>

```python
from cdktn_provider_aws import workmail_user

workmailUser.WorkmailUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkmailUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkmailUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate">disabled_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate">enabled_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId">identity_provider_identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate">mailbox_deprovisioned_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate">mailbox_provisioned_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput">company_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput">department_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput">hidden_from_global_address_list_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput">identity_provider_user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput">job_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput">office_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput">street_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput">telephone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput">user_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.company">company</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList">hidden_from_global_address_list</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId">identity_provider_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.office">office</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.street">street</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone">telephone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole">user_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `disabled_date`<sup>Required</sup> <a name="disabled_date" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate"></a>

```python
disabled_date: str
```

- *Type:* str

---

##### `enabled_date`<sup>Required</sup> <a name="enabled_date" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate"></a>

```python
enabled_date: str
```

- *Type:* str

---

##### `identity_provider_identity_store_id`<sup>Required</sup> <a name="identity_provider_identity_store_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId"></a>

```python
identity_provider_identity_store_id: str
```

- *Type:* str

---

##### `mailbox_deprovisioned_date`<sup>Required</sup> <a name="mailbox_deprovisioned_date" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate"></a>

```python
mailbox_deprovisioned_date: str
```

- *Type:* str

---

##### `mailbox_provisioned_date`<sup>Required</sup> <a name="mailbox_provisioned_date" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate"></a>

```python
mailbox_provisioned_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `company_input`<sup>Optional</sup> <a name="company_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput"></a>

```python
company_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `department_input`<sup>Optional</sup> <a name="department_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput"></a>

```python
department_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `hidden_from_global_address_list_input`<sup>Optional</sup> <a name="hidden_from_global_address_list_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput"></a>

```python
hidden_from_global_address_list_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_provider_user_id_input`<sup>Optional</sup> <a name="identity_provider_user_id_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput"></a>

```python
identity_provider_user_id_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `job_title_input`<sup>Optional</sup> <a name="job_title_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput"></a>

```python
job_title_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `office_input`<sup>Optional</sup> <a name="office_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput"></a>

```python
office_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `street_input`<sup>Optional</sup> <a name="street_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput"></a>

```python
street_input: str
```

- *Type:* str

---

##### `telephone_input`<sup>Optional</sup> <a name="telephone_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput"></a>

```python
telephone_input: str
```

- *Type:* str

---

##### `user_role_input`<sup>Optional</sup> <a name="user_role_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput"></a>

```python
user_role_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.company"></a>

```python
company: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `hidden_from_global_address_list`<sup>Required</sup> <a name="hidden_from_global_address_list" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList"></a>

```python
hidden_from_global_address_list: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_provider_user_id`<sup>Required</sup> <a name="identity_provider_user_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId"></a>

```python
identity_provider_user_id: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.office"></a>

```python
office: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `street`<sup>Required</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.street"></a>

```python
street: str
```

- *Type:* str

---

##### `telephone`<sup>Required</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone"></a>

```python
telephone: str
```

- *Type:* str

---

##### `user_role`<sup>Required</sup> <a name="user_role" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailUserConfig <a name="WorkmailUserConfig" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.Initializer"></a>

```python
from cdktn_provider_aws import workmail_user

workmailUser.WorkmailUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  email: str,
  name: str,
  organization_id: str,
  city: str = None,
  company: str = None,
  country: str = None,
  department: str = None,
  first_name: str = None,
  hidden_from_global_address_list: bool | IResolvable = None,
  identity_provider_user_id: str = None,
  initials: str = None,
  job_title: str = None,
  last_name: str = None,
  office: str = None,
  password: str = None,
  region: str = None,
  street: str = None,
  telephone: str = None,
  user_role: str = None,
  zip_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email">email</a></code> | <code>str</code> | Primary email address used to register the user with WorkMail. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name">name</a></code> | <code>str</code> | Username of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId">organization_id</a></code> | <code>str</code> | Identifier of the WorkMail organization where the user is managed. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city">city</a></code> | <code>str</code> | City where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company">company</a></code> | <code>str</code> | Company associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country">country</a></code> | <code>str</code> | Country where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department">department</a></code> | <code>str</code> | Department associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName">first_name</a></code> | <code>str</code> | First name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList">hidden_from_global_address_list</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to hide the user from the global address list. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId">identity_provider_user_id</a></code> | <code>str</code> | User ID from IAM Identity Center associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials">initials</a></code> | <code>str</code> | Initials of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle">job_title</a></code> | <code>str</code> | Job title of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName">last_name</a></code> | <code>str</code> | Last name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office">office</a></code> | <code>str</code> | Office where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password">password</a></code> | <code>str</code> | Password to set for the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street">street</a></code> | <code>str</code> | Street address of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone">telephone</a></code> | <code>str</code> | Telephone number of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole">user_role</a></code> | <code>str</code> | Role assigned to the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode">zip_code</a></code> | <code>str</code> | ZIP or postal code of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Primary email address used to register the user with WorkMail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#email WorkmailUser#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#name WorkmailUser#name}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

Identifier of the WorkMail organization where the user is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city"></a>

```python
city: str
```

- *Type:* str

City where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#city WorkmailUser#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company"></a>

```python
company: str
```

- *Type:* str

Company associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#company WorkmailUser#company}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country"></a>

```python
country: str
```

- *Type:* str

Country where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#country WorkmailUser#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department"></a>

```python
department: str
```

- *Type:* str

Department associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#department WorkmailUser#department}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}

---

##### `hidden_from_global_address_list`<sup>Optional</sup> <a name="hidden_from_global_address_list" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList"></a>

```python
hidden_from_global_address_list: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to hide the user from the global address list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}

---

##### `identity_provider_user_id`<sup>Optional</sup> <a name="identity_provider_user_id" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId"></a>

```python
identity_provider_user_id: str
```

- *Type:* str

User ID from IAM Identity Center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials"></a>

```python
initials: str
```

- *Type:* str

Initials of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#initials WorkmailUser#initials}

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

Job title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office"></a>

```python
office: str
```

- *Type:* str

Office where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#office WorkmailUser#office}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password to set for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#password WorkmailUser#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#region WorkmailUser#region}

---

##### `street`<sup>Optional</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street"></a>

```python
street: str
```

- *Type:* str

Street address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#street WorkmailUser#street}

---

##### `telephone`<sup>Optional</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone"></a>

```python
telephone: str
```

- *Type:* str

Telephone number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

Role assigned to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

ZIP or postal code of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}

---



