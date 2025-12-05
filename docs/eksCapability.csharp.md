# `eksCapability` Submodule <a name="`eksCapability` Submodule" id="@cdktf/provider-aws.eksCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCapability <a name="EksCapability" id="@cdktf/provider-aws.eksCapability.EksCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability aws_eks_capability}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapability(Construct Scope, string Id, EksCapabilityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig">EksCapabilityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.eksCapability.EksCapability.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig">EksCapabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapability.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.eksCapability.EksCapability.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.eksCapability.EksCapability.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapability.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.eksCapability.EksCapability.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.eksCapability.EksCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.eksCapability.EksCapability.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.eksCapability.EksCapability.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.eksCapability.EksCapability.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.eksCapability.EksCapability.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.eksCapability.EksCapability.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.eksCapability.EksCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.eksCapability.EksCapability.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.eksCapability.EksCapability.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCapability.EksCapability.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCapability.EksCapability.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.eksCapability.EksCapability.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCapability.EksCapability.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.eksCapability.EksCapability.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.eksCapability.EksCapability.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.eksCapability.EksCapability.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.eksCapability.EksCapability.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCapability.EksCapability.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.eksCapability.EksCapability.putConfiguration"></a>

```csharp
private void PutConfiguration(IResolvable|EksCapabilityConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapability.putConfiguration.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.eksCapability.EksCapability.putTimeouts"></a>

```csharp
private void PutTimeouts(EksCapabilityTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapability.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.eksCapability.EksCapability.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.eksCapability.EksCapability.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.eksCapability.EksCapability.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.eksCapability.EksCapability.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EksCapability resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.eksCapability.EksCapability.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCapability.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksCapability.EksCapability.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCapability.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCapability.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksCapability.EksCapability.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCapability.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EksCapability resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksCapability to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCapability.EksCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EksCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList">EksCapabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference">EksCapabilityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityNameInput">CapabilityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.configurationInput">ConfigurationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicyInput">DeletePropagationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityName">CapabilityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicy">DeletePropagationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.eksCapability.EksCapability.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.eksCapability.EksCapability.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.eksCapability.EksCapability.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.eksCapability.EksCapability.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.eksCapability.EksCapability.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.eksCapability.EksCapability.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksCapability.EksCapability.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksCapability.EksCapability.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksCapability.EksCapability.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksCapability.EksCapability.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCapability.EksCapability.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksCapability.EksCapability.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.eksCapability.EksCapability.property.configuration"></a>

```csharp
public EksCapabilityConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList">EksCapabilityConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksCapability.EksCapability.property.timeouts"></a>

```csharp
public EksCapabilityTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference">EksCapabilityTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.eksCapability.EksCapability.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `CapabilityNameInput`<sup>Optional</sup> <a name="CapabilityNameInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityNameInput"></a>

```csharp
public string CapabilityNameInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.configurationInput"></a>

```csharp
public IResolvable|EksCapabilityConfiguration[] ConfigurationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>[]

---

##### `DeletePropagationPolicyInput`<sup>Optional</sup> <a name="DeletePropagationPolicyInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicyInput"></a>

```csharp
public string DeletePropagationPolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.timeoutsInput"></a>

```csharp
public IResolvable|EksCapabilityTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.eksCapability.EksCapability.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CapabilityName`<sup>Required</sup> <a name="CapabilityName" id="@cdktf/provider-aws.eksCapability.EksCapability.property.capabilityName"></a>

```csharp
public string CapabilityName { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksCapability.EksCapability.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `DeletePropagationPolicy`<sup>Required</sup> <a name="DeletePropagationPolicy" id="@cdktf/provider-aws.eksCapability.EksCapability.property.deletePropagationPolicy"></a>

```csharp
public string DeletePropagationPolicy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.eksCapability.EksCapability.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.eksCapability.EksCapability.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.eksCapability.EksCapability.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapability.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.eksCapability.EksCapability.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksCapabilityConfig <a name="EksCapabilityConfig" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CapabilityName,
    string ClusterName,
    string DeletePropagationPolicy,
    string RoleArn,
    string Type,
    IResolvable|EksCapabilityConfiguration[] Configuration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    EksCapabilityTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.capabilityName">CapabilityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy">DeletePropagationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.configuration">Configuration</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#tags EksCapability#tags}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CapabilityName`<sup>Required</sup> <a name="CapabilityName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.capabilityName"></a>

```csharp
public string CapabilityName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}.

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}.

---

##### `DeletePropagationPolicy`<sup>Required</sup> <a name="DeletePropagationPolicy" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy"></a>

```csharp
public string DeletePropagationPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.configuration"></a>

```csharp
public IResolvable|EksCapabilityConfiguration[] Configuration { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#region EksCapability#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#tags EksCapability#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfig.property.timeouts"></a>

```csharp
public EksCapabilityTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#timeouts EksCapability#timeouts}

---

### EksCapabilityConfiguration <a name="EksCapabilityConfiguration" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfiguration {
    IResolvable|EksCapabilityConfigurationArgoCd[] ArgoCd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration.property.argoCd">ArgoCd</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>[]</code> | argo_cd block. |

---

##### `ArgoCd`<sup>Optional</sup> <a name="ArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration.property.argoCd"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCd[] ArgoCd { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>[]

argo_cd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}

---

### EksCapabilityConfigurationArgoCd <a name="EksCapabilityConfigurationArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCd {
    IResolvable|EksCapabilityConfigurationArgoCdAwsIdc[] AwsIdc = null,
    string Namespace = null,
    IResolvable|EksCapabilityConfigurationArgoCdNetworkAccess[] NetworkAccess = null,
    IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMapping[] RbacRoleMapping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc">AwsIdc</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>[]</code> | aws_idc block. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#namespace EksCapability#namespace}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess">NetworkAccess</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>[]</code> | network_access block. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMapping">RbacRoleMapping</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>[]</code> | rbac_role_mapping block. |

---

##### `AwsIdc`<sup>Optional</sup> <a name="AwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdAwsIdc[] AwsIdc { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>[]

aws_idc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#namespace EksCapability#namespace}.

---

##### `NetworkAccess`<sup>Optional</sup> <a name="NetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdNetworkAccess[] NetworkAccess { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>[]

network_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#network_access EksCapability#network_access}

---

##### `RbacRoleMapping`<sup>Optional</sup> <a name="RbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMapping"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMapping[] RbacRoleMapping { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>[]

rbac_role_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#rbac_role_mapping EksCapability#rbac_role_mapping}

---

### EksCapabilityConfigurationArgoCdAwsIdc <a name="EksCapabilityConfigurationArgoCdAwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdAwsIdc {
    string IdcInstanceArn,
    string IdcRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion">IdcRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}. |

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}.

---

##### `IdcRegion`<sup>Optional</sup> <a name="IdcRegion" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion"></a>

```csharp
public string IdcRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}.

---

### EksCapabilityConfigurationArgoCdNetworkAccess <a name="EksCapabilityConfigurationArgoCdNetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdNetworkAccess {
    string[] VpceIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds">VpceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}. |

---

##### `VpceIds`<sup>Optional</sup> <a name="VpceIds" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds"></a>

```csharp
public string[] VpceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}.

---

### EksCapabilityConfigurationArgoCdRbacRoleMapping <a name="EksCapabilityConfigurationArgoCdRbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdRbacRoleMapping {
    string Role,
    IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] Identity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role EksCapability#role}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.identity">Identity</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>[]</code> | identity block. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role EksCapability#role}.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping.property.identity"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] Identity { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>[]

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#identity EksCapability#identity}

---

### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity {
    string Id,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#id EksCapability#id}. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#id EksCapability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}.

---

### EksCapabilityTimeouts <a name="EksCapabilityTimeouts" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#create EksCapability#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete EksCapability#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#update EksCapability#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EksCapabilityConfigurationArgoCdAwsIdcList <a name="EksCapabilityConfigurationArgoCdAwsIdcList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdAwsIdcList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get"></a>

```csharp
private EksCapabilityConfigurationArgoCdAwsIdcOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdAwsIdc[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>[]

---


### EksCapabilityConfigurationArgoCdAwsIdcOutputReference <a name="EksCapabilityConfigurationArgoCdAwsIdcOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdAwsIdcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion">ResetIdcRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdcRegion` <a name="ResetIdcRegion" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion"></a>

```csharp
private void ResetIdcRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput">IdcRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion">IdcRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn"></a>

```csharp
public string IdcManagedApplicationArn { get; }
```

- *Type:* string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput"></a>

```csharp
public string IdcInstanceArnInput { get; }
```

- *Type:* string

---

##### `IdcRegionInput`<sup>Optional</sup> <a name="IdcRegionInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput"></a>

```csharp
public string IdcRegionInput { get; }
```

- *Type:* string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `IdcRegion`<sup>Required</sup> <a name="IdcRegion" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion"></a>

```csharp
public string IdcRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdAwsIdc InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

---


### EksCapabilityConfigurationArgoCdList <a name="EksCapabilityConfigurationArgoCdList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get"></a>

```csharp
private EksCapabilityConfigurationArgoCdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCd[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>[]

---


### EksCapabilityConfigurationArgoCdNetworkAccessList <a name="EksCapabilityConfigurationArgoCdNetworkAccessList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdNetworkAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get"></a>

```csharp
private EksCapabilityConfigurationArgoCdNetworkAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdNetworkAccess[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>[]

---


### EksCapabilityConfigurationArgoCdNetworkAccessOutputReference <a name="EksCapabilityConfigurationArgoCdNetworkAccessOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdNetworkAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds">ResetVpceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpceIds` <a name="ResetVpceIds" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds"></a>

```csharp
private void ResetVpceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput">VpceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds">VpceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpceIdsInput`<sup>Optional</sup> <a name="VpceIdsInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput"></a>

```csharp
public string[] VpceIdsInput { get; }
```

- *Type:* string[]

---

##### `VpceIds`<sup>Required</sup> <a name="VpceIds" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds"></a>

```csharp
public string[] VpceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdNetworkAccess InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

---


### EksCapabilityConfigurationArgoCdOutputReference <a name="EksCapabilityConfigurationArgoCdOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc">PutAwsIdc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess">PutNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping">PutRbacRoleMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc">ResetAwsIdc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess">ResetNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMapping">ResetRbacRoleMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsIdc` <a name="PutAwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc"></a>

```csharp
private void PutAwsIdc(IResolvable|EksCapabilityConfigurationArgoCdAwsIdc[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>[]

---

##### `PutNetworkAccess` <a name="PutNetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess"></a>

```csharp
private void PutNetworkAccess(IResolvable|EksCapabilityConfigurationArgoCdNetworkAccess[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>[]

---

##### `PutRbacRoleMapping` <a name="PutRbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping"></a>

```csharp
private void PutRbacRoleMapping(IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMapping[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMapping.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>[]

---

##### `ResetAwsIdc` <a name="ResetAwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc"></a>

```csharp
private void ResetAwsIdc()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNetworkAccess` <a name="ResetNetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess"></a>

```csharp
private void ResetNetworkAccess()
```

##### `ResetRbacRoleMapping` <a name="ResetRbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMapping"></a>

```csharp
private void ResetRbacRoleMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc">AwsIdc</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList">EksCapabilityConfigurationArgoCdAwsIdcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList">EksCapabilityConfigurationArgoCdNetworkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMapping">RbacRoleMapping</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList">EksCapabilityConfigurationArgoCdRbacRoleMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl">ServerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput">AwsIdcInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput">NetworkAccessInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingInput">RbacRoleMappingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIdc`<sup>Required</sup> <a name="AwsIdc" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc"></a>

```csharp
public EksCapabilityConfigurationArgoCdAwsIdcList AwsIdc { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcList">EksCapabilityConfigurationArgoCdAwsIdcList</a>

---

##### `NetworkAccess`<sup>Required</sup> <a name="NetworkAccess" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess"></a>

```csharp
public EksCapabilityConfigurationArgoCdNetworkAccessList NetworkAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessList">EksCapabilityConfigurationArgoCdNetworkAccessList</a>

---

##### `RbacRoleMapping`<sup>Required</sup> <a name="RbacRoleMapping" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMapping"></a>

```csharp
public EksCapabilityConfigurationArgoCdRbacRoleMappingList RbacRoleMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList">EksCapabilityConfigurationArgoCdRbacRoleMappingList</a>

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl"></a>

```csharp
public string ServerUrl { get; }
```

- *Type:* string

---

##### `AwsIdcInput`<sup>Optional</sup> <a name="AwsIdcInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdAwsIdc[] AwsIdcInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NetworkAccessInput`<sup>Optional</sup> <a name="NetworkAccessInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdNetworkAccess[] NetworkAccessInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>[]

---

##### `RbacRoleMappingInput`<sup>Optional</sup> <a name="RbacRoleMappingInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingInput"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMapping[] RbacRoleMappingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCd InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get"></a>

```csharp
private EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>[]

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdRbacRoleMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get"></a>

```csharp
private EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingList.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMapping[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>[]

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity"></a>

```csharp
private void PutIdentity(IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.putIdentity.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>[]

---

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.resetIdentity"></a>

```csharp
private void ResetIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identityInput">IdentityInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identity"></a>

```csharp
public EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.identityInput"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] IdentityInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity">EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity</a>[]

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCdRbacRoleMapping InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMapping">EksCapabilityConfigurationArgoCdRbacRoleMapping</a>

---


### EksCapabilityConfigurationList <a name="EksCapabilityConfigurationList" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.get"></a>

```csharp
private EksCapabilityConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfiguration[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>[]

---


### EksCapabilityConfigurationOutputReference <a name="EksCapabilityConfigurationOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd">PutArgoCd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd">ResetArgoCd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArgoCd` <a name="PutArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd"></a>

```csharp
private void PutArgoCd(IResolvable|EksCapabilityConfigurationArgoCd[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>[]

---

##### `ResetArgoCd` <a name="ResetArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd"></a>

```csharp
private void ResetArgoCd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd">ArgoCd</a></code> | <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList">EksCapabilityConfigurationArgoCdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput">ArgoCdInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgoCd`<sup>Required</sup> <a name="ArgoCd" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd"></a>

```csharp
public EksCapabilityConfigurationArgoCdList ArgoCd { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCdList">EksCapabilityConfigurationArgoCdList</a>

---

##### `ArgoCdInput`<sup>Optional</sup> <a name="ArgoCdInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput"></a>

```csharp
public IResolvable|EksCapabilityConfigurationArgoCd[] ArgoCdInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityConfiguration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

---


### EksCapabilityTimeoutsOutputReference <a name="EksCapabilityTimeoutsOutputReference" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCapabilityTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCapability.EksCapabilityTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EksCapabilityTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.eksCapability.EksCapabilityTimeouts">EksCapabilityTimeouts</a>

---



