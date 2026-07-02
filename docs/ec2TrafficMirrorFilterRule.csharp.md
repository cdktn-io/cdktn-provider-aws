# `ec2TrafficMirrorFilterRule` Submodule <a name="`ec2TrafficMirrorFilterRule` Submodule" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorFilterRule <a name="Ec2TrafficMirrorFilterRule" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule aws_ec2_traffic_mirror_filter_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TrafficMirrorFilterRule(Construct Scope, string Id, Ec2TrafficMirrorFilterRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig">Ec2TrafficMirrorFilterRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig">Ec2TrafficMirrorFilterRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(Ec2TrafficMirrorFilterRuleDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(Ec2TrafficMirrorFilterRuleSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TrafficMirrorFilterRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TrafficMirrorFilterRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TrafficMirrorFilterRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TrafficMirrorFilterRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TrafficMirrorFilterRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TrafficMirrorFilterRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TrafficMirrorFilterRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TrafficMirrorFilterRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TrafficMirrorFilterRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput">RuleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput">SourceCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput">TrafficDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput">TrafficMirrorFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction">RuleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection">TrafficDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId">TrafficMirrorFilterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput"></a>

```csharp
public string DestinationCidrBlockInput { get; }
```

- *Type:* string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput"></a>

```csharp
public string RuleActionInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `SourceCidrBlockInput`<sup>Optional</sup> <a name="SourceCidrBlockInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput"></a>

```csharp
public string SourceCidrBlockInput { get; }
```

- *Type:* string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---

##### `TrafficDirectionInput`<sup>Optional</sup> <a name="TrafficDirectionInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput"></a>

```csharp
public string TrafficDirectionInput { get; }
```

- *Type:* string

---

##### `TrafficMirrorFilterIdInput`<sup>Optional</sup> <a name="TrafficMirrorFilterIdInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput"></a>

```csharp
public string TrafficMirrorFilterIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction"></a>

```csharp
public string RuleAction { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock"></a>

```csharp
public string SourceCidrBlock { get; }
```

- *Type:* string

---

##### `TrafficDirection`<sup>Required</sup> <a name="TrafficDirection" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection"></a>

```csharp
public string TrafficDirection { get; }
```

- *Type:* string

---

##### `TrafficMirrorFilterId`<sup>Required</sup> <a name="TrafficMirrorFilterId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId"></a>

```csharp
public string TrafficMirrorFilterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorFilterRuleConfig <a name="Ec2TrafficMirrorFilterRuleConfig" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TrafficMirrorFilterRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationCidrBlock,
    string RuleAction,
    double RuleNumber,
    string SourceCidrBlock,
    string TrafficDirection,
    string TrafficMirrorFilterId,
    string Description = null,
    Ec2TrafficMirrorFilterRuleDestinationPortRange DestinationPortRange = null,
    string Id = null,
    double Protocol = null,
    string Region = null,
    Ec2TrafficMirrorFilterRuleSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction">RuleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection">TrafficDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId">TrafficMirrorFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol">Protocol</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | source_port_range block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}.

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction"></a>

```csharp
public string RuleAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}.

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}.

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock"></a>

```csharp
public string SourceCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}.

---

##### `TrafficDirection`<sup>Required</sup> <a name="TrafficDirection" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection"></a>

```csharp
public string TrafficDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}.

---

##### `TrafficMirrorFilterId`<sup>Required</sup> <a name="TrafficMirrorFilterId" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId"></a>

```csharp
public string TrafficMirrorFilterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#region Ec2TrafficMirrorFilterRule#region}

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}

---

### Ec2TrafficMirrorFilterRuleDestinationPortRange <a name="Ec2TrafficMirrorFilterRuleDestinationPortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TrafficMirrorFilterRuleDestinationPortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

### Ec2TrafficMirrorFilterRuleSourcePortRange <a name="Ec2TrafficMirrorFilterRuleSourcePortRange" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TrafficMirrorFilterRuleSourcePortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---


### Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---



