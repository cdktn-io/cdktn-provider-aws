# `directoryservicedataUser` Submodule <a name="`directoryservicedataUser` Submodule" id="@cdktn/provider-aws.directoryservicedataUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryservicedataUser <a name="DirectoryservicedataUser" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user aws_directoryservicedata_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryservicedataUser(Construct Scope, string Id, DirectoryservicedataUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig">DirectoryservicedataUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig">DirectoryservicedataUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetSurname">ResetSurname</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetGivenName"></a>

```csharp
private void ResetGivenName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetSurname"></a>

```csharp
private void ResetSurname()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryservicedataUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryservicedataUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryservicedataUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryservicedataUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DirectoryservicedataUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectoryservicedataUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryservicedataUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryservicedataUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryservicedataUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.distinguishedName">DistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.realm">Realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.sid">Sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.userPrincipalName">UserPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenNameInput">GivenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountNameInput">SamAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surnameInput">SurnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountName">SamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surname">Surname</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DistinguishedName`<sup>Required</sup> <a name="DistinguishedName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.distinguishedName"></a>

```csharp
public string DistinguishedName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.realm"></a>

```csharp
public string Realm { get; }
```

- *Type:* string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

##### `UserPrincipalName`<sup>Required</sup> <a name="UserPrincipalName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.userPrincipalName"></a>

```csharp
public string UserPrincipalName { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenNameInput"></a>

```csharp
public string GivenNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SamAccountNameInput`<sup>Optional</sup> <a name="SamAccountNameInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountNameInput"></a>

```csharp
public string SamAccountNameInput { get; }
```

- *Type:* string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surnameInput"></a>

```csharp
public string SurnameInput { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountName"></a>

```csharp
public string SamAccountName { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryservicedataUserConfig <a name="DirectoryservicedataUserConfig" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DirectoryservicedataUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DirectoryId,
    string SamAccountName,
    string EmailAddress = null,
    string GivenName = null,
    string Region = null,
    string Surname = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.samAccountName">SamAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.givenName">GivenName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.surname">Surname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}.

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.samAccountName"></a>

```csharp
public string SamAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}.

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.givenName"></a>

```csharp
public string GivenName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#region DirectoryservicedataUser#region}

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.surname"></a>

```csharp
public string Surname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}.

---



