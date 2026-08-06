# `iamAccountPasswordPolicy` Submodule <a name="`iamAccountPasswordPolicy` Submodule" id="@cdktn/provider-aws.iamAccountPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamAccountPasswordPolicy <a name="IamAccountPasswordPolicy" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy aws_iam_account_password_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IamAccountPasswordPolicy(Construct Scope, string Id, IamAccountPasswordPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig">IamAccountPasswordPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig">IamAccountPasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword">ResetAllowUsersToChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry">ResetHardExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge">ResetMaxPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention">ResetPasswordReusePrevention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters">ResetRequireLowercaseCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers">ResetRequireNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols">ResetRequireSymbols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters">ResetRequireUppercaseCharacters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowUsersToChangePassword` <a name="ResetAllowUsersToChangePassword" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword"></a>

```csharp
private void ResetAllowUsersToChangePassword()
```

##### `ResetHardExpiry` <a name="ResetHardExpiry" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry"></a>

```csharp
private void ResetHardExpiry()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxPasswordAge` <a name="ResetMaxPasswordAge" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge"></a>

```csharp
private void ResetMaxPasswordAge()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength"></a>

```csharp
private void ResetMinimumPasswordLength()
```

##### `ResetPasswordReusePrevention` <a name="ResetPasswordReusePrevention" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention"></a>

```csharp
private void ResetPasswordReusePrevention()
```

##### `ResetRequireLowercaseCharacters` <a name="ResetRequireLowercaseCharacters" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters"></a>

```csharp
private void ResetRequireLowercaseCharacters()
```

##### `ResetRequireNumbers` <a name="ResetRequireNumbers" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers"></a>

```csharp
private void ResetRequireNumbers()
```

##### `ResetRequireSymbols` <a name="ResetRequireSymbols" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols"></a>

```csharp
private void ResetRequireSymbols()
```

##### `ResetRequireUppercaseCharacters` <a name="ResetRequireUppercaseCharacters" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters"></a>

```csharp
private void ResetRequireUppercaseCharacters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamAccountPasswordPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamAccountPasswordPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamAccountPasswordPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamAccountPasswordPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IamAccountPasswordPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IamAccountPasswordPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamAccountPasswordPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamAccountPasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IamAccountPasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords">ExpirePasswords</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput">AllowUsersToChangePasswordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput">HardExpiryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput">MaxPasswordAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput">PasswordReusePreventionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput">RequireLowercaseCharactersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput">RequireNumbersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput">RequireSymbolsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput">RequireUppercaseCharactersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword">AllowUsersToChangePassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry">HardExpiry</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge">MaxPasswordAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention">PasswordReusePrevention</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters">RequireLowercaseCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers">RequireNumbers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols">RequireSymbols</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters">RequireUppercaseCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExpirePasswords`<sup>Required</sup> <a name="ExpirePasswords" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords"></a>

```csharp
public IResolvable ExpirePasswords { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowUsersToChangePasswordInput`<sup>Optional</sup> <a name="AllowUsersToChangePasswordInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput"></a>

```csharp
public bool|IResolvable AllowUsersToChangePasswordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HardExpiryInput`<sup>Optional</sup> <a name="HardExpiryInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput"></a>

```csharp
public bool|IResolvable HardExpiryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxPasswordAgeInput`<sup>Optional</sup> <a name="MaxPasswordAgeInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput"></a>

```csharp
public double MaxPasswordAgeInput { get; }
```

- *Type:* double

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput"></a>

```csharp
public double MinimumPasswordLengthInput { get; }
```

- *Type:* double

---

##### `PasswordReusePreventionInput`<sup>Optional</sup> <a name="PasswordReusePreventionInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput"></a>

```csharp
public double PasswordReusePreventionInput { get; }
```

- *Type:* double

---

##### `RequireLowercaseCharactersInput`<sup>Optional</sup> <a name="RequireLowercaseCharactersInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput"></a>

```csharp
public bool|IResolvable RequireLowercaseCharactersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireNumbersInput`<sup>Optional</sup> <a name="RequireNumbersInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput"></a>

```csharp
public bool|IResolvable RequireNumbersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireSymbolsInput`<sup>Optional</sup> <a name="RequireSymbolsInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput"></a>

```csharp
public bool|IResolvable RequireSymbolsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireUppercaseCharactersInput`<sup>Optional</sup> <a name="RequireUppercaseCharactersInput" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput"></a>

```csharp
public bool|IResolvable RequireUppercaseCharactersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowUsersToChangePassword`<sup>Required</sup> <a name="AllowUsersToChangePassword" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword"></a>

```csharp
public bool|IResolvable AllowUsersToChangePassword { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HardExpiry`<sup>Required</sup> <a name="HardExpiry" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry"></a>

```csharp
public bool|IResolvable HardExpiry { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxPasswordAge`<sup>Required</sup> <a name="MaxPasswordAge" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge"></a>

```csharp
public double MaxPasswordAge { get; }
```

- *Type:* double

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength"></a>

```csharp
public double MinimumPasswordLength { get; }
```

- *Type:* double

---

##### `PasswordReusePrevention`<sup>Required</sup> <a name="PasswordReusePrevention" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention"></a>

```csharp
public double PasswordReusePrevention { get; }
```

- *Type:* double

---

##### `RequireLowercaseCharacters`<sup>Required</sup> <a name="RequireLowercaseCharacters" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters"></a>

```csharp
public bool|IResolvable RequireLowercaseCharacters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireNumbers`<sup>Required</sup> <a name="RequireNumbers" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers"></a>

```csharp
public bool|IResolvable RequireNumbers { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireSymbols`<sup>Required</sup> <a name="RequireSymbols" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols"></a>

```csharp
public bool|IResolvable RequireSymbols { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireUppercaseCharacters`<sup>Required</sup> <a name="RequireUppercaseCharacters" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters"></a>

```csharp
public bool|IResolvable RequireUppercaseCharacters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamAccountPasswordPolicyConfig <a name="IamAccountPasswordPolicyConfig" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IamAccountPasswordPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AllowUsersToChangePassword = null,
    bool|IResolvable HardExpiry = null,
    string Id = null,
    double MaxPasswordAge = null,
    double MinimumPasswordLength = null,
    double PasswordReusePrevention = null,
    bool|IResolvable RequireLowercaseCharacters = null,
    bool|IResolvable RequireNumbers = null,
    bool|IResolvable RequireSymbols = null,
    bool|IResolvable RequireUppercaseCharacters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword">AllowUsersToChangePassword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry">HardExpiry</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#id IamAccountPasswordPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge">MaxPasswordAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention">PasswordReusePrevention</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters">RequireLowercaseCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers">RequireNumbers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols">RequireSymbols</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}. |
| <code><a href="#@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters">RequireUppercaseCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowUsersToChangePassword`<sup>Optional</sup> <a name="AllowUsersToChangePassword" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword"></a>

```csharp
public bool|IResolvable AllowUsersToChangePassword { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.

---

##### `HardExpiry`<sup>Optional</sup> <a name="HardExpiry" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry"></a>

```csharp
public bool|IResolvable HardExpiry { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#id IamAccountPasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxPasswordAge`<sup>Optional</sup> <a name="MaxPasswordAge" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge"></a>

```csharp
public double MaxPasswordAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}.

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength"></a>

```csharp
public double MinimumPasswordLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.

---

##### `PasswordReusePrevention`<sup>Optional</sup> <a name="PasswordReusePrevention" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention"></a>

```csharp
public double PasswordReusePrevention { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.

---

##### `RequireLowercaseCharacters`<sup>Optional</sup> <a name="RequireLowercaseCharacters" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters"></a>

```csharp
public bool|IResolvable RequireLowercaseCharacters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.

---

##### `RequireNumbers`<sup>Optional</sup> <a name="RequireNumbers" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers"></a>

```csharp
public bool|IResolvable RequireNumbers { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}.

---

##### `RequireSymbols`<sup>Optional</sup> <a name="RequireSymbols" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols"></a>

```csharp
public bool|IResolvable RequireSymbols { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}.

---

##### `RequireUppercaseCharacters`<sup>Optional</sup> <a name="RequireUppercaseCharacters" id="@cdktn/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters"></a>

```csharp
public bool|IResolvable RequireUppercaseCharacters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.

---



