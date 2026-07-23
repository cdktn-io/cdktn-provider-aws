# `workmailOrganization` Submodule <a name="`workmailOrganization` Submodule" id="@cdktn/provider-aws.workmailOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailOrganization <a name="WorkmailOrganization" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization aws_workmail_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkmailOrganization(Construct Scope, string Id, WorkmailOrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig">WorkmailOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig">WorkmailOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteDirectory">ResetDeleteDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteIdentityCenterApplication">ResetDeleteIdentityCenterApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetInteroperabilityEnabled">ResetInteroperabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkmailOrganizationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---

##### `ResetDeleteDirectory` <a name="ResetDeleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteDirectory"></a>

```csharp
private void ResetDeleteDirectory()
```

##### `ResetDeleteIdentityCenterApplication` <a name="ResetDeleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteIdentityCenterApplication"></a>

```csharp
private void ResetDeleteIdentityCenterApplication()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetInteroperabilityEnabled` <a name="ResetInteroperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetInteroperabilityEnabled"></a>

```csharp
private void ResetInteroperabilityEnabled()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkmailOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WorkmailOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkmailOrganization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkmailOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkmailOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.completedDate">CompletedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.defaultMailDomain">DefaultMailDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryType">DirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.migrationAdmin">MigrationAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference">WorkmailOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectoryInput">DeleteDirectoryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplicationInput">DeleteIdentityCenterApplicationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabledInput">InteroperabilityEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAliasInput">OrganizationAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectory">DeleteDirectory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplication">DeleteIdentityCenterApplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabled">InteroperabilityEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAlias">OrganizationAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CompletedDate`<sup>Required</sup> <a name="CompletedDate" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.completedDate"></a>

```csharp
public string CompletedDate { get; }
```

- *Type:* string

---

##### `DefaultMailDomain`<sup>Required</sup> <a name="DefaultMailDomain" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.defaultMailDomain"></a>

```csharp
public string DefaultMailDomain { get; }
```

- *Type:* string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryType"></a>

```csharp
public string DirectoryType { get; }
```

- *Type:* string

---

##### `MigrationAdmin`<sup>Required</sup> <a name="MigrationAdmin" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.migrationAdmin"></a>

```csharp
public string MigrationAdmin { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeouts"></a>

```csharp
public WorkmailOrganizationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference">WorkmailOrganizationTimeoutsOutputReference</a>

---

##### `DeleteDirectoryInput`<sup>Optional</sup> <a name="DeleteDirectoryInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectoryInput"></a>

```csharp
public bool|IResolvable DeleteDirectoryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteIdentityCenterApplicationInput`<sup>Optional</sup> <a name="DeleteIdentityCenterApplicationInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplicationInput"></a>

```csharp
public bool|IResolvable DeleteIdentityCenterApplicationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `InteroperabilityEnabledInput`<sup>Optional</sup> <a name="InteroperabilityEnabledInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabledInput"></a>

```csharp
public bool|IResolvable InteroperabilityEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `OrganizationAliasInput`<sup>Optional</sup> <a name="OrganizationAliasInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAliasInput"></a>

```csharp
public string OrganizationAliasInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeoutsInput"></a>

```csharp
public IResolvable|WorkmailOrganizationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---

##### `DeleteDirectory`<sup>Required</sup> <a name="DeleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectory"></a>

```csharp
public bool|IResolvable DeleteDirectory { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteIdentityCenterApplication`<sup>Required</sup> <a name="DeleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplication"></a>

```csharp
public bool|IResolvable DeleteIdentityCenterApplication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `InteroperabilityEnabled`<sup>Required</sup> <a name="InteroperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabled"></a>

```csharp
public bool|IResolvable InteroperabilityEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `OrganizationAlias`<sup>Required</sup> <a name="OrganizationAlias" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAlias"></a>

```csharp
public string OrganizationAlias { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailOrganizationConfig <a name="WorkmailOrganizationConfig" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkmailOrganizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OrganizationAlias,
    bool|IResolvable DeleteDirectory = null,
    bool|IResolvable DeleteIdentityCenterApplication = null,
    string DirectoryId = null,
    bool|IResolvable InteroperabilityEnabled = null,
    string KmsKeyArn = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WorkmailOrganizationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.organizationAlias">OrganizationAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteDirectory">DeleteDirectory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteIdentityCenterApplication">DeleteIdentityCenterApplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.interoperabilityEnabled">InteroperabilityEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OrganizationAlias`<sup>Required</sup> <a name="OrganizationAlias" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.organizationAlias"></a>

```csharp
public string OrganizationAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}.

---

##### `DeleteDirectory`<sup>Optional</sup> <a name="DeleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteDirectory"></a>

```csharp
public bool|IResolvable DeleteDirectory { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}.

---

##### `DeleteIdentityCenterApplication`<sup>Optional</sup> <a name="DeleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteIdentityCenterApplication"></a>

```csharp
public bool|IResolvable DeleteIdentityCenterApplication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}.

---

##### `InteroperabilityEnabled`<sup>Optional</sup> <a name="InteroperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.interoperabilityEnabled"></a>

```csharp
public bool|IResolvable InteroperabilityEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#region WorkmailOrganization#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.timeouts"></a>

```csharp
public WorkmailOrganizationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#timeouts WorkmailOrganization#timeouts}

---

### WorkmailOrganizationTimeouts <a name="WorkmailOrganizationTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkmailOrganizationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#create WorkmailOrganization#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/workmail_organization#delete WorkmailOrganization#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkmailOrganizationTimeoutsOutputReference <a name="WorkmailOrganizationTimeoutsOutputReference" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WorkmailOrganizationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkmailOrganizationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---



