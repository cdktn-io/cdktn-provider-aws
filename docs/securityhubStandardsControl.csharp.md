# `securityhubStandardsControl` Submodule <a name="`securityhubStandardsControl` Submodule" id="@cdktn/provider-aws.securityhubStandardsControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandardsControl <a name="SecurityhubStandardsControl" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control aws_securityhub_standards_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubStandardsControl(Construct Scope, string Id, SecurityhubStandardsControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig">SecurityhubStandardsControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig">SecurityhubStandardsControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetDisabledReason">ResetDisabledReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisabledReason` <a name="ResetDisabledReason" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetDisabledReason"></a>

```csharp
private void ResetDisabledReason()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubStandardsControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubStandardsControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubStandardsControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubStandardsControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubStandardsControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityhubStandardsControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubStandardsControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubStandardsControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubStandardsControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlId">ControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusUpdatedAt">ControlStatusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.relatedRequirements">RelatedRequirements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.remediationUrl">RemediationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.severityRating">SeverityRating</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusInput">ControlStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReasonInput">DisabledReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArnInput">StandardsControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatus">ControlStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReason">DisabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArn">StandardsControlArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlId"></a>

```csharp
public string ControlId { get; }
```

- *Type:* string

---

##### `ControlStatusUpdatedAt`<sup>Required</sup> <a name="ControlStatusUpdatedAt" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusUpdatedAt"></a>

```csharp
public string ControlStatusUpdatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RelatedRequirements`<sup>Required</sup> <a name="RelatedRequirements" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.relatedRequirements"></a>

```csharp
public string[] RelatedRequirements { get; }
```

- *Type:* string[]

---

##### `RemediationUrl`<sup>Required</sup> <a name="RemediationUrl" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.remediationUrl"></a>

```csharp
public string RemediationUrl { get; }
```

- *Type:* string

---

##### `SeverityRating`<sup>Required</sup> <a name="SeverityRating" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.severityRating"></a>

```csharp
public string SeverityRating { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `ControlStatusInput`<sup>Optional</sup> <a name="ControlStatusInput" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusInput"></a>

```csharp
public string ControlStatusInput { get; }
```

- *Type:* string

---

##### `DisabledReasonInput`<sup>Optional</sup> <a name="DisabledReasonInput" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReasonInput"></a>

```csharp
public string DisabledReasonInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StandardsControlArnInput`<sup>Optional</sup> <a name="StandardsControlArnInput" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArnInput"></a>

```csharp
public string StandardsControlArnInput { get; }
```

- *Type:* string

---

##### `ControlStatus`<sup>Required</sup> <a name="ControlStatus" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatus"></a>

```csharp
public string ControlStatus { get; }
```

- *Type:* string

---

##### `DisabledReason`<sup>Required</sup> <a name="DisabledReason" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReason"></a>

```csharp
public string DisabledReason { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StandardsControlArn`<sup>Required</sup> <a name="StandardsControlArn" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArn"></a>

```csharp
public string StandardsControlArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardsControlConfig <a name="SecurityhubStandardsControlConfig" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubStandardsControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ControlStatus,
    string StandardsControlArn,
    string DisabledReason = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.controlStatus">ControlStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.standardsControlArn">StandardsControlArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.disabledReason">DisabledReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#id SecurityhubStandardsControl#id}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ControlStatus`<sup>Required</sup> <a name="ControlStatus" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.controlStatus"></a>

```csharp
public string ControlStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}.

---

##### `StandardsControlArn`<sup>Required</sup> <a name="StandardsControlArn" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.standardsControlArn"></a>

```csharp
public string StandardsControlArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}.

---

##### `DisabledReason`<sup>Optional</sup> <a name="DisabledReason" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.disabledReason"></a>

```csharp
public string DisabledReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#id SecurityhubStandardsControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/securityhub_standards_control#region SecurityhubStandardsControl#region}

---



