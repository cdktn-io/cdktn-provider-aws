# `workmailUser` Submodule <a name="`workmailUser` Submodule" id="@cdktn/provider-aws.workmailUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailUser <a name="WorkmailUser" id="@cdktn/provider-aws.workmailUser.WorkmailUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user aws_workmail_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkmailUser(Construct Scope, string Id, WorkmailUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig">WorkmailUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.workmailUser.WorkmailUser.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.workmailUser.WorkmailUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.workmailUser.WorkmailUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.workmailUser.WorkmailUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailUser.WorkmailUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailUser.WorkmailUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCompany` <a name="ResetCompany" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCompany"></a>

```csharp
private void ResetCompany()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetDepartment"></a>

```csharp
private void ResetDepartment()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetHiddenFromGlobalAddressList` <a name="ResetHiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetHiddenFromGlobalAddressList"></a>

```csharp
private void ResetHiddenFromGlobalAddressList()
```

##### `ResetIdentityProviderUserId` <a name="ResetIdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetIdentityProviderUserId"></a>

```csharp
private void ResetIdentityProviderUserId()
```

##### `ResetInitials` <a name="ResetInitials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetInitials"></a>

```csharp
private void ResetInitials()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetJobTitle"></a>

```csharp
private void ResetJobTitle()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetOffice` <a name="ResetOffice" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetOffice"></a>

```csharp
private void ResetOffice()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStreet` <a name="ResetStreet" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetStreet"></a>

```csharp
private void ResetStreet()
```

##### `ResetTelephone` <a name="ResetTelephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetTelephone"></a>

```csharp
private void ResetTelephone()
```

##### `ResetUserRole` <a name="ResetUserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetUserRole"></a>

```csharp
private void ResetUserRole()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.resetZipCode"></a>

```csharp
private void ResetZipCode()
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

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workmailUser.WorkmailUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkmailUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkmailUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkmailUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate">DisabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate">EnabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId">IdentityProviderIdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate">MailboxDeprovisionedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate">MailboxProvisionedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput">CompanyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput">DepartmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput">HiddenFromGlobalAddressListInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput">IdentityProviderUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput">InitialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput">JobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput">OfficeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput">StreetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput">TelephoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput">UserRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput">ZipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.company">Company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList">HiddenFromGlobalAddressList</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId">IdentityProviderUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle">JobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.office">Office</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.street">Street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone">Telephone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole">UserRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode">ZipCode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisabledDate`<sup>Required</sup> <a name="DisabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.disabledDate"></a>

```csharp
public string DisabledDate { get; }
```

- *Type:* string

---

##### `EnabledDate`<sup>Required</sup> <a name="EnabledDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.enabledDate"></a>

```csharp
public string EnabledDate { get; }
```

- *Type:* string

---

##### `IdentityProviderIdentityStoreId`<sup>Required</sup> <a name="IdentityProviderIdentityStoreId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderIdentityStoreId"></a>

```csharp
public string IdentityProviderIdentityStoreId { get; }
```

- *Type:* string

---

##### `MailboxDeprovisionedDate`<sup>Required</sup> <a name="MailboxDeprovisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxDeprovisionedDate"></a>

```csharp
public string MailboxDeprovisionedDate { get; }
```

- *Type:* string

---

##### `MailboxProvisionedDate`<sup>Required</sup> <a name="MailboxProvisionedDate" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.mailboxProvisionedDate"></a>

```csharp
public string MailboxProvisionedDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.companyInput"></a>

```csharp
public string CompanyInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.departmentInput"></a>

```csharp
public string DepartmentInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `HiddenFromGlobalAddressListInput`<sup>Optional</sup> <a name="HiddenFromGlobalAddressListInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressListInput"></a>

```csharp
public bool|IResolvable HiddenFromGlobalAddressListInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityProviderUserIdInput`<sup>Optional</sup> <a name="IdentityProviderUserIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserIdInput"></a>

```csharp
public string IdentityProviderUserIdInput { get; }
```

- *Type:* string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initialsInput"></a>

```csharp
public string InitialsInput { get; }
```

- *Type:* string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitleInput"></a>

```csharp
public string JobTitleInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OfficeInput`<sup>Optional</sup> <a name="OfficeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.officeInput"></a>

```csharp
public string OfficeInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StreetInput`<sup>Optional</sup> <a name="StreetInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.streetInput"></a>

```csharp
public string StreetInput { get; }
```

- *Type:* string

---

##### `TelephoneInput`<sup>Optional</sup> <a name="TelephoneInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephoneInput"></a>

```csharp
public string TelephoneInput { get; }
```

- *Type:* string

---

##### `UserRoleInput`<sup>Optional</sup> <a name="UserRoleInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRoleInput"></a>

```csharp
public string UserRoleInput { get; }
```

- *Type:* string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCodeInput"></a>

```csharp
public string ZipCodeInput { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.company"></a>

```csharp
public string Company { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `HiddenFromGlobalAddressList`<sup>Required</sup> <a name="HiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.hiddenFromGlobalAddressList"></a>

```csharp
public bool|IResolvable HiddenFromGlobalAddressList { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityProviderUserId`<sup>Required</sup> <a name="IdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.identityProviderUserId"></a>

```csharp
public string IdentityProviderUserId { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.jobTitle"></a>

```csharp
public string JobTitle { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Office`<sup>Required</sup> <a name="Office" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.office"></a>

```csharp
public string Office { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Street`<sup>Required</sup> <a name="Street" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.street"></a>

```csharp
public string Street { get; }
```

- *Type:* string

---

##### `Telephone`<sup>Required</sup> <a name="Telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.telephone"></a>

```csharp
public string Telephone { get; }
```

- *Type:* string

---

##### `UserRole`<sup>Required</sup> <a name="UserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.userRole"></a>

```csharp
public string UserRole { get; }
```

- *Type:* string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.zipCode"></a>

```csharp
public string ZipCode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.workmailUser.WorkmailUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailUserConfig <a name="WorkmailUserConfig" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkmailUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Email,
    string Name,
    string OrganizationId,
    string City = null,
    string Company = null,
    string Country = null,
    string Department = null,
    string FirstName = null,
    bool|IResolvable HiddenFromGlobalAddressList = null,
    string IdentityProviderUserId = null,
    string Initials = null,
    string JobTitle = null,
    string LastName = null,
    string Office = null,
    string Password = null,
    string Region = null,
    string Street = null,
    string Telephone = null,
    string UserRole = null,
    string ZipCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email">Email</a></code> | <code>string</code> | Primary email address used to register the user with WorkMail. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name">Name</a></code> | <code>string</code> | Username of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | Identifier of the WorkMail organization where the user is managed. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city">City</a></code> | <code>string</code> | City where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company">Company</a></code> | <code>string</code> | Company associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country">Country</a></code> | <code>string</code> | Country where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department">Department</a></code> | <code>string</code> | Department associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName">FirstName</a></code> | <code>string</code> | First name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList">HiddenFromGlobalAddressList</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to hide the user from the global address list. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId">IdentityProviderUserId</a></code> | <code>string</code> | User ID from IAM Identity Center associated with the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials">Initials</a></code> | <code>string</code> | Initials of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle">JobTitle</a></code> | <code>string</code> | Job title of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName">LastName</a></code> | <code>string</code> | Last name of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office">Office</a></code> | <code>string</code> | Office where the user is located. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password">Password</a></code> | <code>string</code> | Password to set for the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street">Street</a></code> | <code>string</code> | Street address of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone">Telephone</a></code> | <code>string</code> | Telephone number of the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole">UserRole</a></code> | <code>string</code> | Role assigned to the user. |
| <code><a href="#@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode">ZipCode</a></code> | <code>string</code> | ZIP or postal code of the user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#display_name WorkmailUser#display_name}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Primary email address used to register the user with WorkMail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#email WorkmailUser#email}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#name WorkmailUser#name}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

Identifier of the WorkMail organization where the user is managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#organization_id WorkmailUser#organization_id}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

City where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#city WorkmailUser#city}

---

##### `Company`<sup>Optional</sup> <a name="Company" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.company"></a>

```csharp
public string Company { get; set; }
```

- *Type:* string

Company associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#company WorkmailUser#company}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Country where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#country WorkmailUser#country}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.department"></a>

```csharp
public string Department { get; set; }
```

- *Type:* string

Department associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#department WorkmailUser#department}

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#first_name WorkmailUser#first_name}

---

##### `HiddenFromGlobalAddressList`<sup>Optional</sup> <a name="HiddenFromGlobalAddressList" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.hiddenFromGlobalAddressList"></a>

```csharp
public bool|IResolvable HiddenFromGlobalAddressList { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to hide the user from the global address list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#hidden_from_global_address_list WorkmailUser#hidden_from_global_address_list}

---

##### `IdentityProviderUserId`<sup>Optional</sup> <a name="IdentityProviderUserId" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.identityProviderUserId"></a>

```csharp
public string IdentityProviderUserId { get; set; }
```

- *Type:* string

User ID from IAM Identity Center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#identity_provider_user_id WorkmailUser#identity_provider_user_id}

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.initials"></a>

```csharp
public string Initials { get; set; }
```

- *Type:* string

Initials of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#initials WorkmailUser#initials}

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.jobTitle"></a>

```csharp
public string JobTitle { get; set; }
```

- *Type:* string

Job title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#job_title WorkmailUser#job_title}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#last_name WorkmailUser#last_name}

---

##### `Office`<sup>Optional</sup> <a name="Office" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.office"></a>

```csharp
public string Office { get; set; }
```

- *Type:* string

Office where the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#office WorkmailUser#office}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password to set for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#password WorkmailUser#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#region WorkmailUser#region}

---

##### `Street`<sup>Optional</sup> <a name="Street" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.street"></a>

```csharp
public string Street { get; set; }
```

- *Type:* string

Street address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#street WorkmailUser#street}

---

##### `Telephone`<sup>Optional</sup> <a name="Telephone" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.telephone"></a>

```csharp
public string Telephone { get; set; }
```

- *Type:* string

Telephone number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#telephone WorkmailUser#telephone}

---

##### `UserRole`<sup>Optional</sup> <a name="UserRole" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.userRole"></a>

```csharp
public string UserRole { get; set; }
```

- *Type:* string

Role assigned to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#user_role WorkmailUser#user_role}

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktn/provider-aws.workmailUser.WorkmailUserConfig.property.zipCode"></a>

```csharp
public string ZipCode { get; set; }
```

- *Type:* string

ZIP or postal code of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_user#zip_code WorkmailUser#zip_code}

---



