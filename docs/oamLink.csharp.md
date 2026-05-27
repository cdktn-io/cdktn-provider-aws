# `oamLink` Submodule <a name="`oamLink` Submodule" id="@cdktn/provider-aws.oamLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OamLink <a name="OamLink" id="@cdktn/provider-aws.oamLink.OamLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link aws_oam_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.oamLink.OamLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLink(Construct Scope, string Id, OamLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig">OamLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.oamLink.OamLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.oamLink.OamLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.oamLink.OamLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkConfig">OamLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.putLinkConfiguration">PutLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.resetLinkConfiguration">ResetLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.oamLink.OamLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.oamLink.OamLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.oamLink.OamLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.oamLink.OamLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.oamLink.OamLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.oamLink.OamLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.oamLink.OamLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.oamLink.OamLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.oamLink.OamLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.oamLink.OamLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.oamLink.OamLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.oamLink.OamLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.oamLink.OamLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.oamLink.OamLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.oamLink.OamLink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.oamLink.OamLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.oamLink.OamLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.oamLink.OamLink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.oamLink.OamLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.oamLink.OamLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.oamLink.OamLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.oamLink.OamLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.oamLink.OamLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.oamLink.OamLink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.oamLink.OamLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.oamLink.OamLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLinkConfiguration` <a name="PutLinkConfiguration" id="@cdktn/provider-aws.oamLink.OamLink.putLinkConfiguration"></a>

```csharp
private void PutLinkConfiguration(OamLinkLinkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.oamLink.OamLink.putLinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration">OamLinkLinkConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.oamLink.OamLink.putTimeouts"></a>

```csharp
private void PutTimeouts(OamLinkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.oamLink.OamLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts">OamLinkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.oamLink.OamLink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLinkConfiguration` <a name="ResetLinkConfiguration" id="@cdktn/provider-aws.oamLink.OamLink.resetLinkConfiguration"></a>

```csharp
private void ResetLinkConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.oamLink.OamLink.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.oamLink.OamLink.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.oamLink.OamLink.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.oamLink.OamLink.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OamLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.oamLink.OamLink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OamLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.oamLink.OamLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.oamLink.OamLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OamLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.oamLink.OamLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.oamLink.OamLink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OamLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.oamLink.OamLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.oamLink.OamLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OamLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OamLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.oamLink.OamLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.oamLink.OamLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OamLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.oamLink.OamLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OamLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.oamLink.OamLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OamLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.linkConfiguration">LinkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference">OamLinkLinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.linkId">LinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.sinkArn">SinkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference">OamLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.labelTemplateInput">LabelTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.linkConfigurationInput">LinkConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration">OamLinkLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.sinkIdentifierInput">SinkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts">OamLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.labelTemplate">LabelTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.sinkIdentifier">SinkIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.oamLink.OamLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.oamLink.OamLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.oamLink.OamLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.oamLink.OamLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.oamLink.OamLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.oamLink.OamLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.oamLink.OamLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.oamLink.OamLink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.oamLink.OamLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.oamLink.OamLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.oamLink.OamLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.oamLink.OamLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.oamLink.OamLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.oamLink.OamLink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.oamLink.OamLink.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-aws.oamLink.OamLink.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `LinkConfiguration`<sup>Required</sup> <a name="LinkConfiguration" id="@cdktn/provider-aws.oamLink.OamLink.property.linkConfiguration"></a>

```csharp
public OamLinkLinkConfigurationOutputReference LinkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference">OamLinkLinkConfigurationOutputReference</a>

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-aws.oamLink.OamLink.property.linkId"></a>

```csharp
public string LinkId { get; }
```

- *Type:* string

---

##### `SinkArn`<sup>Required</sup> <a name="SinkArn" id="@cdktn/provider-aws.oamLink.OamLink.property.sinkArn"></a>

```csharp
public string SinkArn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.oamLink.OamLink.property.timeouts"></a>

```csharp
public OamLinkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference">OamLinkTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.oamLink.OamLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelTemplateInput`<sup>Optional</sup> <a name="LabelTemplateInput" id="@cdktn/provider-aws.oamLink.OamLink.property.labelTemplateInput"></a>

```csharp
public string LabelTemplateInput { get; }
```

- *Type:* string

---

##### `LinkConfigurationInput`<sup>Optional</sup> <a name="LinkConfigurationInput" id="@cdktn/provider-aws.oamLink.OamLink.property.linkConfigurationInput"></a>

```csharp
public OamLinkLinkConfiguration LinkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration">OamLinkLinkConfiguration</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.oamLink.OamLink.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-aws.oamLink.OamLink.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `SinkIdentifierInput`<sup>Optional</sup> <a name="SinkIdentifierInput" id="@cdktn/provider-aws.oamLink.OamLink.property.sinkIdentifierInput"></a>

```csharp
public string SinkIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.oamLink.OamLink.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.oamLink.OamLink.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.oamLink.OamLink.property.timeoutsInput"></a>

```csharp
public IResolvable|OamLinkTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts">OamLinkTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.oamLink.OamLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LabelTemplate`<sup>Required</sup> <a name="LabelTemplate" id="@cdktn/provider-aws.oamLink.OamLink.property.labelTemplate"></a>

```csharp
public string LabelTemplate { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.oamLink.OamLink.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-aws.oamLink.OamLink.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `SinkIdentifier`<sup>Required</sup> <a name="SinkIdentifier" id="@cdktn/provider-aws.oamLink.OamLink.property.sinkIdentifier"></a>

```csharp
public string SinkIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.oamLink.OamLink.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.oamLink.OamLink.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.oamLink.OamLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OamLinkConfig <a name="OamLinkConfig" id="@cdktn/provider-aws.oamLink.OamLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.oamLink.OamLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LabelTemplate,
    string[] ResourceTypes,
    string SinkIdentifier,
    string Id = null,
    OamLinkLinkConfiguration LinkConfiguration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    OamLinkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.labelTemplate">LabelTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#label_template OamLink#label_template}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#resource_types OamLink#resource_types}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.sinkIdentifier">SinkIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#sink_identifier OamLink#sink_identifier}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#id OamLink#id}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.linkConfiguration">LinkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration">OamLinkLinkConfiguration</a></code> | link_configuration block. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#tags OamLink#tags}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#tags_all OamLink#tags_all}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts">OamLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LabelTemplate`<sup>Required</sup> <a name="LabelTemplate" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.labelTemplate"></a>

```csharp
public string LabelTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#label_template OamLink#label_template}.

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#resource_types OamLink#resource_types}.

---

##### `SinkIdentifier`<sup>Required</sup> <a name="SinkIdentifier" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.sinkIdentifier"></a>

```csharp
public string SinkIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#sink_identifier OamLink#sink_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#id OamLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkConfiguration`<sup>Optional</sup> <a name="LinkConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.linkConfiguration"></a>

```csharp
public OamLinkLinkConfiguration LinkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration">OamLinkLinkConfiguration</a>

link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#link_configuration OamLink#link_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#region OamLink#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#tags OamLink#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#tags_all OamLink#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.oamLink.OamLinkConfig.property.timeouts"></a>

```csharp
public OamLinkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts">OamLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#timeouts OamLink#timeouts}

---

### OamLinkLinkConfiguration <a name="OamLinkLinkConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkLinkConfiguration {
    OamLinkLinkConfigurationLogGroupConfiguration LogGroupConfiguration = null,
    OamLinkLinkConfigurationMetricConfiguration MetricConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration.property.logGroupConfiguration">LogGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration">OamLinkLinkConfigurationLogGroupConfiguration</a></code> | log_group_configuration block. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration.property.metricConfiguration">MetricConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration">OamLinkLinkConfigurationMetricConfiguration</a></code> | metric_configuration block. |

---

##### `LogGroupConfiguration`<sup>Optional</sup> <a name="LogGroupConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration.property.logGroupConfiguration"></a>

```csharp
public OamLinkLinkConfigurationLogGroupConfiguration LogGroupConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration">OamLinkLinkConfigurationLogGroupConfiguration</a>

log_group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#log_group_configuration OamLink#log_group_configuration}

---

##### `MetricConfiguration`<sup>Optional</sup> <a name="MetricConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration.property.metricConfiguration"></a>

```csharp
public OamLinkLinkConfigurationMetricConfiguration MetricConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration">OamLinkLinkConfigurationMetricConfiguration</a>

metric_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#metric_configuration OamLink#metric_configuration}

---

### OamLinkLinkConfigurationLogGroupConfiguration <a name="OamLinkLinkConfigurationLogGroupConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkLinkConfigurationLogGroupConfiguration {
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#filter OamLink#filter}. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#filter OamLink#filter}.

---

### OamLinkLinkConfigurationMetricConfiguration <a name="OamLinkLinkConfigurationMetricConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkLinkConfigurationMetricConfiguration {
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#filter OamLink#filter}. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#filter OamLink#filter}.

---

### OamLinkTimeouts <a name="OamLinkTimeouts" id="@cdktn/provider-aws.oamLink.OamLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.oamLink.OamLinkTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#create OamLink#create}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#delete OamLink#delete}. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#update OamLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.oamLink.OamLinkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#create OamLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.oamLink.OamLinkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#delete OamLink#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.oamLink.OamLinkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/oam_link#update OamLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OamLinkLinkConfigurationLogGroupConfigurationOutputReference <a name="OamLinkLinkConfigurationLogGroupConfigurationOutputReference" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkLinkConfigurationLogGroupConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration">OamLinkLinkConfigurationLogGroupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference.property.internalValue"></a>

```csharp
public OamLinkLinkConfigurationLogGroupConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration">OamLinkLinkConfigurationLogGroupConfiguration</a>

---


### OamLinkLinkConfigurationMetricConfigurationOutputReference <a name="OamLinkLinkConfigurationMetricConfigurationOutputReference" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkLinkConfigurationMetricConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration">OamLinkLinkConfigurationMetricConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference.property.internalValue"></a>

```csharp
public OamLinkLinkConfigurationMetricConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration">OamLinkLinkConfigurationMetricConfiguration</a>

---


### OamLinkLinkConfigurationOutputReference <a name="OamLinkLinkConfigurationOutputReference" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkLinkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.putLogGroupConfiguration">PutLogGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.putMetricConfiguration">PutMetricConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.resetLogGroupConfiguration">ResetLogGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.resetMetricConfiguration">ResetMetricConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogGroupConfiguration` <a name="PutLogGroupConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.putLogGroupConfiguration"></a>

```csharp
private void PutLogGroupConfiguration(OamLinkLinkConfigurationLogGroupConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.putLogGroupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration">OamLinkLinkConfigurationLogGroupConfiguration</a>

---

##### `PutMetricConfiguration` <a name="PutMetricConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.putMetricConfiguration"></a>

```csharp
private void PutMetricConfiguration(OamLinkLinkConfigurationMetricConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.putMetricConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration">OamLinkLinkConfigurationMetricConfiguration</a>

---

##### `ResetLogGroupConfiguration` <a name="ResetLogGroupConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.resetLogGroupConfiguration"></a>

```csharp
private void ResetLogGroupConfiguration()
```

##### `ResetMetricConfiguration` <a name="ResetMetricConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.resetMetricConfiguration"></a>

```csharp
private void ResetMetricConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.logGroupConfiguration">LogGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference">OamLinkLinkConfigurationLogGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.metricConfiguration">MetricConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference">OamLinkLinkConfigurationMetricConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.logGroupConfigurationInput">LogGroupConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration">OamLinkLinkConfigurationLogGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.metricConfigurationInput">MetricConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration">OamLinkLinkConfigurationMetricConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration">OamLinkLinkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupConfiguration`<sup>Required</sup> <a name="LogGroupConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.logGroupConfiguration"></a>

```csharp
public OamLinkLinkConfigurationLogGroupConfigurationOutputReference LogGroupConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfigurationOutputReference">OamLinkLinkConfigurationLogGroupConfigurationOutputReference</a>

---

##### `MetricConfiguration`<sup>Required</sup> <a name="MetricConfiguration" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.metricConfiguration"></a>

```csharp
public OamLinkLinkConfigurationMetricConfigurationOutputReference MetricConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfigurationOutputReference">OamLinkLinkConfigurationMetricConfigurationOutputReference</a>

---

##### `LogGroupConfigurationInput`<sup>Optional</sup> <a name="LogGroupConfigurationInput" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.logGroupConfigurationInput"></a>

```csharp
public OamLinkLinkConfigurationLogGroupConfiguration LogGroupConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationLogGroupConfiguration">OamLinkLinkConfigurationLogGroupConfiguration</a>

---

##### `MetricConfigurationInput`<sup>Optional</sup> <a name="MetricConfigurationInput" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.metricConfigurationInput"></a>

```csharp
public OamLinkLinkConfigurationMetricConfiguration MetricConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationMetricConfiguration">OamLinkLinkConfigurationMetricConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.oamLink.OamLinkLinkConfigurationOutputReference.property.internalValue"></a>

```csharp
public OamLinkLinkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.oamLink.OamLinkLinkConfiguration">OamLinkLinkConfiguration</a>

---


### OamLinkTimeoutsOutputReference <a name="OamLinkTimeoutsOutputReference" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OamLinkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts">OamLinkTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.oamLink.OamLinkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OamLinkTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.oamLink.OamLinkTimeouts">OamLinkTimeouts</a>

---



