# `networkAclRule` Submodule <a name="`networkAclRule` Submodule" id="@cdktn/provider-aws.networkAclRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkAclRule <a name="NetworkAclRule" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule aws_network_acl_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkAclRule(Construct Scope, string Id, NetworkAclRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig">NetworkAclRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig">NetworkAclRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetToPort"></a>

```csharp
private void ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkAclRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkAclRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkAclRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkAclRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkAclRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkAclRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkAclRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkAclRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkAclRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egressInput">EgressInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput">NetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput">RuleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egress">Egress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId">NetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction">RuleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egressInput"></a>

```csharp
public bool|IResolvable EgressInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `NetworkAclIdInput`<sup>Optional</sup> <a name="NetworkAclIdInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput"></a>

```csharp
public string NetworkAclIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput"></a>

```csharp
public string RuleActionInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egress"></a>

```csharp
public bool|IResolvable Egress { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `NetworkAclId`<sup>Required</sup> <a name="NetworkAclId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId"></a>

```csharp
public string NetworkAclId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction"></a>

```csharp
public string RuleAction { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkAclRuleConfig <a name="NetworkAclRuleConfig" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkAclRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NetworkAclId,
    string Protocol,
    string RuleAction,
    double RuleNumber,
    string CidrBlock = null,
    bool|IResolvable Egress = null,
    double FromPort = null,
    double IcmpCode = null,
    double IcmpType = null,
    string Id = null,
    string Ipv6CidrBlock = null,
    string Region = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId">NetworkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction">RuleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress">Egress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#egress NetworkAclRule#egress}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#id NetworkAclRule#id}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NetworkAclId`<sup>Required</sup> <a name="NetworkAclId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId"></a>

```csharp
public string NetworkAclId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}.

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction"></a>

```csharp
public string RuleAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}.

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress"></a>

```csharp
public bool|IResolvable Egress { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#egress NetworkAclRule#egress}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#id NetworkAclRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#region NetworkAclRule#region}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}.

---



