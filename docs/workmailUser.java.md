# `workmailUser` Submodule <a name="`workmailUser` Submodule" id="@cdktn/provider-aws.workmailUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailUser <a name="WorkmailUser" id="@cdktn/provider-aws.workmailUser.WorkmailUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user aws_workmail_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer"></a>

```java
import io.cdktn.providers.aws.workmail_user.WorkmailUser;

WorkmailUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .email(java.lang.String)
    .name(java.lang.String)
    .organizationId(java.lang.String)
//  .city(java.lang.String)
//  .company(java.lang.String)
//  .country(java.lang.String)
//  .department(java.lang.String)
//  .firstName(java.lang.String)
//  .hiddenFromGlobalAddressList(java.lang.Boolean|IResolvable)
//  .identityProviderUserId(java.lang.String)
//  .initials(java.lang.String)
//  .jobTitle(java.lang.String)
//  .lastName(java.lang.String)
//  .office(java.lang.String)
//  .password(java.lang.String)
//  .region(java.lang.String)
//  .street(java.lang.String)
//  .telephone(java.lang.String)
//  .userRole(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Primary email address used to register the user with WorkMail. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Username of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | Identifier of the WorkMail organization where the user is managed. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.city">city</a></code> | <code>java.lang.String</code> | City where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.company">company</a></code> | <code>java.lang.String</code> | Company associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.country">country</a></code> | <code>java.lang.String</code> | Country where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.department">department</a></code> | <code>java.lang.String</code> | Department associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | First name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.hiddenFromGlobalAddressList">hiddenFromGlobalAddressList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to hide the user from the global address list. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.identityProviderUserId">identityProviderUserId</a></code> | <code>java.lang.String</code> | User ID from IAM Identity Center associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.initials">initials</a></code> | <code>java.lang.String</code> | Initials of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | Job title of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Last name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.office">office</a></code> | <code>java.lang.String</code> | Office where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password to set for the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.street">street</a></code> | <code>java.lang.String</code> | Street address of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.telephone">telephone</a></code> | <code>java.lang.String</code> | Telephone number of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.userRole">userRole</a></code> | <code>java.lang.String</code> | Role assigned to the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.zipCode">zipCode</a></code> | <code>java.lang.String</code> | ZIP or postal code of the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Primary email address used to register the user with WorkMail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#email WorkmailUser#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#name WorkmailUser#name}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

Identifier of the WorkMail organization where the user is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.city"></a>

- *Type:* java.lang.String

City where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#city WorkmailUser#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.company"></a>

- *Type:* java.lang.String

Company associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#company WorkmailUser#company}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.country"></a>

- *Type:* java.lang.String

Country where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#country WorkmailUser#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.department"></a>

- *Type:* java.lang.String

Department associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#department WorkmailUser#department}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}

---

##### `hiddenFromGlobalAddressList`<sup>Optional</sup> <a name="hiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.hiddenFromGlobalAddressList"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to hide the user from the global address list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}

---

##### `identityProviderUserId`<sup>Optional</sup> <a name="identityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.identityProviderUserId"></a>

- *Type:* java.lang.String

User ID from IAM Identity Center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.initials"></a>

- *Type:* java.lang.String

Initials of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#initials WorkmailUser#initials}

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.jobTitle"></a>

- *Type:* java.lang.String

Job title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.office"></a>

- *Type:* java.lang.String

Office where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#office WorkmailUser#office}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password to set for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#password WorkmailUser#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#region WorkmailUser#region}

---

##### `street`<sup>Optional</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.street"></a>

- *Type:* java.lang.String

Street address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#street WorkmailUser#street}

---

##### `telephone`<sup>Optional</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.telephone"></a>

- *Type:* java.lang.String

Telephone number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}

---

##### `userRole`<sup>Optional</sup> <a name="userRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.userRole"></a>

- *Type:* java.lang.String

Role assigned to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.zipCode"></a>

- *Type:* java.lang.String

ZIP or postal code of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany">resetCompany</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList">resetHiddenFromGlobalAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId">resetIdentityProviderUserId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice">resetOffice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet">resetStreet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone">resetTelephone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole">resetUserRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCity` <a name="resetCity" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity"></a>

```java
public void resetCity()
```

##### `resetCompany` <a name="resetCompany" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany"></a>

```java
public void resetCompany()
```

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment"></a>

```java
public void resetDepartment()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetHiddenFromGlobalAddressList` <a name="resetHiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList"></a>

```java
public void resetHiddenFromGlobalAddressList()
```

##### `resetIdentityProviderUserId` <a name="resetIdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId"></a>

```java
public void resetIdentityProviderUserId()
```

##### `resetInitials` <a name="resetInitials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials"></a>

```java
public void resetInitials()
```

##### `resetJobTitle` <a name="resetJobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle"></a>

```java
public void resetJobTitle()
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetOffice` <a name="resetOffice" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice"></a>

```java
public void resetOffice()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStreet` <a name="resetStreet" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet"></a>

```java
public void resetStreet()
```

##### `resetTelephone` <a name="resetTelephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone"></a>

```java
public void resetTelephone()
```

##### `resetUserRole` <a name="resetUserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole"></a>

```java
public void resetUserRole()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode"></a>

```java
public void resetZipCode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct"></a>

```java
import io.cdktn.providers.aws.workmail_user.WorkmailUser;

WorkmailUser.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.workmail_user.WorkmailUser;

WorkmailUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.workmail_user.WorkmailUser;

WorkmailUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.workmail_user.WorkmailUser;

WorkmailUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkmailUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkmailUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkmailUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate">disabledDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate">enabledDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId">identityProviderIdentityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate">mailboxDeprovisionedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate">mailboxProvisionedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput">companyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput">departmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput">hiddenFromGlobalAddressListInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput">identityProviderUserIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput">initialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput">jobTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput">officeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput">streetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput">telephoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput">userRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.company">company</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.department">department</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList">hiddenFromGlobalAddressList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId">identityProviderUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.office">office</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.street">street</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone">telephone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole">userRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disabledDate`<sup>Required</sup> <a name="disabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate"></a>

```java
public java.lang.String getDisabledDate();
```

- *Type:* java.lang.String

---

##### `enabledDate`<sup>Required</sup> <a name="enabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate"></a>

```java
public java.lang.String getEnabledDate();
```

- *Type:* java.lang.String

---

##### `identityProviderIdentityStoreId`<sup>Required</sup> <a name="identityProviderIdentityStoreId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId"></a>

```java
public java.lang.String getIdentityProviderIdentityStoreId();
```

- *Type:* java.lang.String

---

##### `mailboxDeprovisionedDate`<sup>Required</sup> <a name="mailboxDeprovisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate"></a>

```java
public java.lang.String getMailboxDeprovisionedDate();
```

- *Type:* java.lang.String

---

##### `mailboxProvisionedDate`<sup>Required</sup> <a name="mailboxProvisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate"></a>

```java
public java.lang.String getMailboxProvisionedDate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `companyInput`<sup>Optional</sup> <a name="companyInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput"></a>

```java
public java.lang.String getCompanyInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput"></a>

```java
public java.lang.String getDepartmentInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `hiddenFromGlobalAddressListInput`<sup>Optional</sup> <a name="hiddenFromGlobalAddressListInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput"></a>

```java
public java.lang.Boolean|IResolvable getHiddenFromGlobalAddressListInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityProviderUserIdInput`<sup>Optional</sup> <a name="identityProviderUserIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput"></a>

```java
public java.lang.String getIdentityProviderUserIdInput();
```

- *Type:* java.lang.String

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput"></a>

```java
public java.lang.String getInitialsInput();
```

- *Type:* java.lang.String

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput"></a>

```java
public java.lang.String getJobTitleInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `officeInput`<sup>Optional</sup> <a name="officeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput"></a>

```java
public java.lang.String getOfficeInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `streetInput`<sup>Optional</sup> <a name="streetInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput"></a>

```java
public java.lang.String getStreetInput();
```

- *Type:* java.lang.String

---

##### `telephoneInput`<sup>Optional</sup> <a name="telephoneInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput"></a>

```java
public java.lang.String getTelephoneInput();
```

- *Type:* java.lang.String

---

##### `userRoleInput`<sup>Optional</sup> <a name="userRoleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput"></a>

```java
public java.lang.String getUserRoleInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.company"></a>

```java
public java.lang.String getCompany();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `hiddenFromGlobalAddressList`<sup>Required</sup> <a name="hiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList"></a>

```java
public java.lang.Boolean|IResolvable getHiddenFromGlobalAddressList();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityProviderUserId`<sup>Required</sup> <a name="identityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId"></a>

```java
public java.lang.String getIdentityProviderUserId();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.office"></a>

```java
public java.lang.String getOffice();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `street`<sup>Required</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.street"></a>

```java
public java.lang.String getStreet();
```

- *Type:* java.lang.String

---

##### `telephone`<sup>Required</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone"></a>

```java
public java.lang.String getTelephone();
```

- *Type:* java.lang.String

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole"></a>

```java
public java.lang.String getUserRole();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailUserConfig <a name="WorkmailUserConfig" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.workmail_user.WorkmailUserConfig;

WorkmailUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .email(java.lang.String)
    .name(java.lang.String)
    .organizationId(java.lang.String)
//  .city(java.lang.String)
//  .company(java.lang.String)
//  .country(java.lang.String)
//  .department(java.lang.String)
//  .firstName(java.lang.String)
//  .hiddenFromGlobalAddressList(java.lang.Boolean|IResolvable)
//  .identityProviderUserId(java.lang.String)
//  .initials(java.lang.String)
//  .jobTitle(java.lang.String)
//  .lastName(java.lang.String)
//  .office(java.lang.String)
//  .password(java.lang.String)
//  .region(java.lang.String)
//  .street(java.lang.String)
//  .telephone(java.lang.String)
//  .userRole(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email">email</a></code> | <code>java.lang.String</code> | Primary email address used to register the user with WorkMail. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name">name</a></code> | <code>java.lang.String</code> | Username of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | Identifier of the WorkMail organization where the user is managed. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city">city</a></code> | <code>java.lang.String</code> | City where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company">company</a></code> | <code>java.lang.String</code> | Company associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country">country</a></code> | <code>java.lang.String</code> | Country where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department">department</a></code> | <code>java.lang.String</code> | Department associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | First name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList">hiddenFromGlobalAddressList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to hide the user from the global address list. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId">identityProviderUserId</a></code> | <code>java.lang.String</code> | User ID from IAM Identity Center associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials">initials</a></code> | <code>java.lang.String</code> | Initials of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | Job title of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Last name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office">office</a></code> | <code>java.lang.String</code> | Office where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password to set for the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street">street</a></code> | <code>java.lang.String</code> | Street address of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone">telephone</a></code> | <code>java.lang.String</code> | Telephone number of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole">userRole</a></code> | <code>java.lang.String</code> | Role assigned to the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | ZIP or postal code of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Primary email address used to register the user with WorkMail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#email WorkmailUser#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#name WorkmailUser#name}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

Identifier of the WorkMail organization where the user is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

City where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#city WorkmailUser#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company"></a>

```java
public java.lang.String getCompany();
```

- *Type:* java.lang.String

Company associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#company WorkmailUser#company}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Country where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#country WorkmailUser#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

Department associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#department WorkmailUser#department}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}

---

##### `hiddenFromGlobalAddressList`<sup>Optional</sup> <a name="hiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList"></a>

```java
public java.lang.Boolean|IResolvable getHiddenFromGlobalAddressList();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to hide the user from the global address list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}

---

##### `identityProviderUserId`<sup>Optional</sup> <a name="identityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId"></a>

```java
public java.lang.String getIdentityProviderUserId();
```

- *Type:* java.lang.String

User ID from IAM Identity Center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

Initials of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#initials WorkmailUser#initials}

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

Job title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office"></a>

```java
public java.lang.String getOffice();
```

- *Type:* java.lang.String

Office where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#office WorkmailUser#office}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password to set for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#password WorkmailUser#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#region WorkmailUser#region}

---

##### `street`<sup>Optional</sup> <a name="street" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street"></a>

```java
public java.lang.String getStreet();
```

- *Type:* java.lang.String

Street address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#street WorkmailUser#street}

---

##### `telephone`<sup>Optional</sup> <a name="telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone"></a>

```java
public java.lang.String getTelephone();
```

- *Type:* java.lang.String

Telephone number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}

---

##### `userRole`<sup>Optional</sup> <a name="userRole" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole"></a>

```java
public java.lang.String getUserRole();
```

- *Type:* java.lang.String

Role assigned to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

ZIP or postal code of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}

---



