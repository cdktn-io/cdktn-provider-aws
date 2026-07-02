# `workmailUser` Submodule <a name="`workmailUser` Submodule" id="@cdktn/provider-aws.workmailUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailUser <a name="WorkmailUser" id="@cdktn/provider-aws.workmailUser.WorkmailUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user aws_workmail_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/workmailuser"

workmailuser.NewWorkmailUser(scope Construct, id *string, config WorkmailUserConfig) WorkmailUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig">WorkmailUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig">WorkmailUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany">ResetCompany</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment">ResetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList">ResetHiddenFromGlobalAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId">ResetIdentityProviderUserId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials">ResetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice">ResetOffice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet">ResetStreet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone">ResetTelephone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole">ResetUserRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCompany` <a name="ResetCompany" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany"></a>

```go
func ResetCompany()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment"></a>

```go
func ResetDepartment()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetHiddenFromGlobalAddressList` <a name="ResetHiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList"></a>

```go
func ResetHiddenFromGlobalAddressList()
```

##### `ResetIdentityProviderUserId` <a name="ResetIdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId"></a>

```go
func ResetIdentityProviderUserId()
```

##### `ResetInitials` <a name="ResetInitials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials"></a>

```go
func ResetInitials()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle"></a>

```go
func ResetJobTitle()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetOffice` <a name="ResetOffice" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice"></a>

```go
func ResetOffice()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStreet` <a name="ResetStreet" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet"></a>

```go
func ResetStreet()
```

##### `ResetTelephone` <a name="ResetTelephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone"></a>

```go
func ResetTelephone()
```

##### `ResetUserRole` <a name="ResetUserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole"></a>

```go
func ResetUserRole()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode"></a>

```go
func ResetZipCode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/workmailuser"

workmailuser.WorkmailUser_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/workmailuser"

workmailuser.WorkmailUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/workmailuser"

workmailuser.WorkmailUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/workmailuser"

workmailuser.WorkmailUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkmailUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkmailUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate">DisabledDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate">EnabledDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId">IdentityProviderIdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate">MailboxDeprovisionedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate">MailboxProvisionedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput">CompanyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput">DepartmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput">HiddenFromGlobalAddressListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput">IdentityProviderUserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput">InitialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput">JobTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput">OfficeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput">StreetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput">TelephoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput">UserRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.company">Company</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.department">Department</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList">HiddenFromGlobalAddressList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId">IdentityProviderUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.office">Office</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.street">Street</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone">Telephone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole">UserRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisabledDate`<sup>Required</sup> <a name="DisabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate"></a>

```go
func DisabledDate() *string
```

- *Type:* *string

---

##### `EnabledDate`<sup>Required</sup> <a name="EnabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate"></a>

```go
func EnabledDate() *string
```

- *Type:* *string

---

##### `IdentityProviderIdentityStoreId`<sup>Required</sup> <a name="IdentityProviderIdentityStoreId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId"></a>

```go
func IdentityProviderIdentityStoreId() *string
```

- *Type:* *string

---

##### `MailboxDeprovisionedDate`<sup>Required</sup> <a name="MailboxDeprovisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate"></a>

```go
func MailboxDeprovisionedDate() *string
```

- *Type:* *string

---

##### `MailboxProvisionedDate`<sup>Required</sup> <a name="MailboxProvisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate"></a>

```go
func MailboxProvisionedDate() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput"></a>

```go
func CompanyInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput"></a>

```go
func DepartmentInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `HiddenFromGlobalAddressListInput`<sup>Optional</sup> <a name="HiddenFromGlobalAddressListInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput"></a>

```go
func HiddenFromGlobalAddressListInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityProviderUserIdInput`<sup>Optional</sup> <a name="IdentityProviderUserIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput"></a>

```go
func IdentityProviderUserIdInput() *string
```

- *Type:* *string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput"></a>

```go
func InitialsInput() *string
```

- *Type:* *string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput"></a>

```go
func JobTitleInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OfficeInput`<sup>Optional</sup> <a name="OfficeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput"></a>

```go
func OfficeInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StreetInput`<sup>Optional</sup> <a name="StreetInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput"></a>

```go
func StreetInput() *string
```

- *Type:* *string

---

##### `TelephoneInput`<sup>Optional</sup> <a name="TelephoneInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput"></a>

```go
func TelephoneInput() *string
```

- *Type:* *string

---

##### `UserRoleInput`<sup>Optional</sup> <a name="UserRoleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput"></a>

```go
func UserRoleInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.company"></a>

```go
func Company() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.department"></a>

```go
func Department() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `HiddenFromGlobalAddressList`<sup>Required</sup> <a name="HiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList"></a>

```go
func HiddenFromGlobalAddressList() interface{}
```

- *Type:* interface{}

---

##### `IdentityProviderUserId`<sup>Required</sup> <a name="IdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId"></a>

```go
func IdentityProviderUserId() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Office`<sup>Required</sup> <a name="Office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.office"></a>

```go
func Office() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Street`<sup>Required</sup> <a name="Street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.street"></a>

```go
func Street() *string
```

- *Type:* *string

---

##### `Telephone`<sup>Required</sup> <a name="Telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone"></a>

```go
func Telephone() *string
```

- *Type:* *string

---

##### `UserRole`<sup>Required</sup> <a name="UserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole"></a>

```go
func UserRole() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailUserConfig <a name="WorkmailUserConfig" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/workmailuser"

&workmailuser.WorkmailUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Email: *string,
	Name: *string,
	OrganizationId: *string,
	City: *string,
	Company: *string,
	Country: *string,
	Department: *string,
	FirstName: *string,
	HiddenFromGlobalAddressList: interface{},
	IdentityProviderUserId: *string,
	Initials: *string,
	JobTitle: *string,
	LastName: *string,
	Office: *string,
	Password: *string,
	Region: *string,
	Street: *string,
	Telephone: *string,
	UserRole: *string,
	ZipCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email">Email</a></code> | <code>*string</code> | Primary email address used to register the user with WorkMail. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name">Name</a></code> | <code>*string</code> | Username of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | Identifier of the WorkMail organization where the user is managed. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city">City</a></code> | <code>*string</code> | City where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company">Company</a></code> | <code>*string</code> | Company associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country">Country</a></code> | <code>*string</code> | Country where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department">Department</a></code> | <code>*string</code> | Department associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName">FirstName</a></code> | <code>*string</code> | First name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList">HiddenFromGlobalAddressList</a></code> | <code>interface{}</code> | Whether to hide the user from the global address list. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId">IdentityProviderUserId</a></code> | <code>*string</code> | User ID from IAM Identity Center associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials">Initials</a></code> | <code>*string</code> | Initials of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle">JobTitle</a></code> | <code>*string</code> | Job title of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName">LastName</a></code> | <code>*string</code> | Last name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office">Office</a></code> | <code>*string</code> | Office where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password">Password</a></code> | <code>*string</code> | Password to set for the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street">Street</a></code> | <code>*string</code> | Street address of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone">Telephone</a></code> | <code>*string</code> | Telephone number of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole">UserRole</a></code> | <code>*string</code> | Role assigned to the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode">ZipCode</a></code> | <code>*string</code> | ZIP or postal code of the user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Primary email address used to register the user with WorkMail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#email WorkmailUser#email}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#name WorkmailUser#name}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

Identifier of the WorkMail organization where the user is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

City where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#city WorkmailUser#city}

---

##### `Company`<sup>Optional</sup> <a name="Company" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company"></a>

```go
Company *string
```

- *Type:* *string

Company associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#company WorkmailUser#company}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

Country where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#country WorkmailUser#country}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department"></a>

```go
Department *string
```

- *Type:* *string

Department associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#department WorkmailUser#department}

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}

---

##### `HiddenFromGlobalAddressList`<sup>Optional</sup> <a name="HiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList"></a>

```go
HiddenFromGlobalAddressList interface{}
```

- *Type:* interface{}

Whether to hide the user from the global address list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}

---

##### `IdentityProviderUserId`<sup>Optional</sup> <a name="IdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId"></a>

```go
IdentityProviderUserId *string
```

- *Type:* *string

User ID from IAM Identity Center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials"></a>

```go
Initials *string
```

- *Type:* *string

Initials of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#initials WorkmailUser#initials}

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle"></a>

```go
JobTitle *string
```

- *Type:* *string

Job title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}

---

##### `Office`<sup>Optional</sup> <a name="Office" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office"></a>

```go
Office *string
```

- *Type:* *string

Office where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#office WorkmailUser#office}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password to set for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#password WorkmailUser#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#region WorkmailUser#region}

---

##### `Street`<sup>Optional</sup> <a name="Street" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street"></a>

```go
Street *string
```

- *Type:* *string

Street address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#street WorkmailUser#street}

---

##### `Telephone`<sup>Optional</sup> <a name="Telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone"></a>

```go
Telephone *string
```

- *Type:* *string

Telephone number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}

---

##### `UserRole`<sup>Optional</sup> <a name="UserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole"></a>

```go
UserRole *string
```

- *Type:* *string

Role assigned to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

ZIP or postal code of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}

---



