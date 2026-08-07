# `vpcSecurityGroupEgressRule` Submodule <a name="`vpcSecurityGroupEgressRule` Submodule" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupEgressRule <a name="VpcSecurityGroupEgressRule" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule aws_vpc_security_group_egress_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcSecurityGroupEgressRule(Construct Scope, string Id, VpcSecurityGroupEgressRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4">ResetCidrIpv4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId">ResetPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId">ResetReferencedSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCidrIpv4` <a name="ResetCidrIpv4" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4"></a>

```csharp
private void ResetCidrIpv4()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6"></a>

```csharp
private void ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetPrefixListId` <a name="ResetPrefixListId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId"></a>

```csharp
private void ResetPrefixListId()
```

##### `ResetReferencedSecurityGroupId` <a name="ResetReferencedSecurityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId"></a>

```csharp
private void ResetReferencedSecurityGroupId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort"></a>

```csharp
private void ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpcSecurityGroupEgressRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcSecurityGroupEgressRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcSecurityGroupEgressRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcSecurityGroupEgressRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcSecurityGroupEgressRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpcSecurityGroupEgressRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcSecurityGroupEgressRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcSecurityGroupEgressRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpcSecurityGroupEgressRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId">SecurityGroupRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input">CidrIpv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput">PrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput">ReferencedSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4">CidrIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId">PrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId">ReferencedSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityGroupRuleId`<sup>Required</sup> <a name="SecurityGroupRuleId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId"></a>

```csharp
public string SecurityGroupRuleId { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CidrIpv4Input`<sup>Optional</sup> <a name="CidrIpv4Input" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input"></a>

```csharp
public string CidrIpv4Input { get; }
```

- *Type:* string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input"></a>

```csharp
public string CidrIpv6Input { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `PrefixListIdInput`<sup>Optional</sup> <a name="PrefixListIdInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput"></a>

```csharp
public string PrefixListIdInput { get; }
```

- *Type:* string

---

##### `ReferencedSecurityGroupIdInput`<sup>Optional</sup> <a name="ReferencedSecurityGroupIdInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput"></a>

```csharp
public string ReferencedSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrIpv4`<sup>Required</sup> <a name="CidrIpv4" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4"></a>

```csharp
public string CidrIpv4 { get; }
```

- *Type:* string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId"></a>

```csharp
public string PrefixListId { get; }
```

- *Type:* string

---

##### `ReferencedSecurityGroupId`<sup>Required</sup> <a name="ReferencedSecurityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId"></a>

```csharp
public string ReferencedSecurityGroupId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupEgressRuleConfig <a name="VpcSecurityGroupEgressRuleConfig" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcSecurityGroupEgressRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IpProtocol,
    string SecurityGroupId,
    string CidrIpv4 = null,
    string CidrIpv6 = null,
    string Description = null,
    double FromPort = null,
    string PrefixListId = null,
    string ReferencedSecurityGroupId = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4">CidrIpv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId">PrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId">ReferencedSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}.

---

##### `CidrIpv4`<sup>Optional</sup> <a name="CidrIpv4" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4"></a>

```csharp
public string CidrIpv4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}.

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}.

---

##### `PrefixListId`<sup>Optional</sup> <a name="PrefixListId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId"></a>

```csharp
public string PrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}.

---

##### `ReferencedSecurityGroupId`<sup>Optional</sup> <a name="ReferencedSecurityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId"></a>

```csharp
public string ReferencedSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#region VpcSecurityGroupEgressRule#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}.

---



