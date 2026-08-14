# `networkfirewallContainerAssociation` Submodule <a name="`networkfirewallContainerAssociation` Submodule" id="@cdktn/provider-aws.networkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallContainerAssociation <a name="NetworkfirewallContainerAssociation" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association aws_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociation(Construct Scope, string Id, NetworkfirewallContainerAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration">PutContainerMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetContainerMonitoringConfiguration">ResetContainerMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerMonitoringConfiguration` <a name="PutContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration"></a>

```csharp
private void PutContainerMonitoringConfiguration(IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkfirewallContainerAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---

##### `ResetContainerMonitoringConfiguration` <a name="ResetContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetContainerMonitoringConfiguration"></a>

```csharp
private void ResetContainerMonitoringConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallContainerAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallContainerAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallContainerAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallContainerAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallContainerAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn">ContainerAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfiguration">ContainerMonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount">ResolvedCidrCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference">NetworkfirewallContainerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.updateToken">UpdateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput">ContainerAssociationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationInput">ContainerMonitoringConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName">ContainerAssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContainerAssociationArn`<sup>Required</sup> <a name="ContainerAssociationArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```csharp
public string ContainerAssociationArn { get; }
```

- *Type:* string

---

##### `ContainerMonitoringConfiguration`<sup>Required</sup> <a name="ContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfiguration"></a>

```csharp
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationList ContainerMonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationList</a>

---

##### `ResolvedCidrCount`<sup>Required</sup> <a name="ResolvedCidrCount" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```csharp
public double ResolvedCidrCount { get; }
```

- *Type:* double

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeouts"></a>

```csharp
public NetworkfirewallContainerAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference">NetworkfirewallContainerAssociationTimeoutsOutputReference</a>

---

##### `UpdateToken`<sup>Required</sup> <a name="UpdateToken" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.updateToken"></a>

```csharp
public string UpdateToken { get; }
```

- *Type:* string

---

##### `ContainerAssociationNameInput`<sup>Optional</sup> <a name="ContainerAssociationNameInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput"></a>

```csharp
public string ContainerAssociationNameInput { get; }
```

- *Type:* string

---

##### `ContainerMonitoringConfigurationInput`<sup>Optional</sup> <a name="ContainerMonitoringConfigurationInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationInput"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfiguration[] ContainerMonitoringConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContainerAssociationName`<sup>Required</sup> <a name="ContainerAssociationName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```csharp
public string ContainerAssociationName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallContainerAssociationConfig <a name="NetworkfirewallContainerAssociationConfig" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ContainerAssociationName,
    string Type,
    IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfiguration[] ContainerMonitoringConfiguration = null,
    string Description = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkfirewallContainerAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName">ContainerAssociationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfiguration">ContainerMonitoringConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]</code> | container_monitoring_configuration block. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContainerAssociationName`<sup>Required</sup> <a name="ContainerAssociationName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName"></a>

```csharp
public string ContainerAssociationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}.

---

##### `ContainerMonitoringConfiguration`<sup>Optional</sup> <a name="ContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfiguration"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfiguration[] ContainerMonitoringConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

container_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#container_monitoring_configuration NetworkfirewallContainerAssociation#container_monitoring_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#region NetworkfirewallContainerAssociation#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.timeouts"></a>

```csharp
public NetworkfirewallContainerAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#timeouts NetworkfirewallContainerAssociation#timeouts}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfiguration <a name="NetworkfirewallContainerAssociationContainerMonitoringConfiguration" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationContainerMonitoringConfiguration {
    string ClusterArn,
    IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[] AttributeFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.attributeFilter">AttributeFilter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]</code> | attribute_filter block. |

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}.

---

##### `AttributeFilter`<sup>Optional</sup> <a name="AttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration.property.attributeFilter"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[] AttributeFilter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

attribute_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#attribute_filter NetworkfirewallContainerAssociation#attribute_filter}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}.

---

### NetworkfirewallContainerAssociationTimeouts <a name="NetworkfirewallContainerAssociationTimeouts" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#create NetworkfirewallContainerAssociation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#delete NetworkfirewallContainerAssociation#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/networkfirewall_container_association#update NetworkfirewallContainerAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get"></a>

```csharp
private NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationList" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get"></a>

```csharp
private NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter">PutAttributeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resetAttributeFilter">ResetAttributeFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeFilter` <a name="PutAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter"></a>

```csharp
private void PutAttributeFilter(IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.putAttributeFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

---

##### `ResetAttributeFilter` <a name="ResetAttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.resetAttributeFilter"></a>

```csharp
private void ResetAttributeFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilter">AttributeFilter</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilterInput">AttributeFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeFilter`<sup>Required</sup> <a name="AttributeFilter" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilter"></a>

```csharp
public NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList AttributeFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilterList</a>

---

##### `AttributeFilterInput`<sup>Optional</sup> <a name="AttributeFilterInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.attributeFilterInput"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter[] AttributeFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter">NetworkfirewallContainerAssociationContainerMonitoringConfigurationAttributeFilter</a>[]

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationContainerMonitoringConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfiguration">NetworkfirewallContainerAssociationContainerMonitoringConfiguration</a>

---


### NetworkfirewallContainerAssociationTimeoutsOutputReference <a name="NetworkfirewallContainerAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallContainerAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallContainerAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTimeouts">NetworkfirewallContainerAssociationTimeouts</a>

---



