# `flowLog` Submodule <a name="`flowLog` Submodule" id="@cdktn/provider-aws.flowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlowLog <a name="FlowLog" id="@cdktn/provider-aws.flowLog.FlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log aws_flow_log}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.flowLog.FlowLog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FlowLog(Construct Scope, string Id, FlowLogConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig">FlowLogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.flowLog.FlowLog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.flowLog.FlowLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.flowLog.FlowLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.flowLog.FlowLogConfig">FlowLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.putDestinationOptions">PutDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetDeliverCrossAccountRole">ResetDeliverCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetDestinationOptions">ResetDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetEniId">ResetEniId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetLogDestination">ResetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetLogDestinationType">ResetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval">ResetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetRegionalNatGatewayId">ResetRegionalNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetTrafficType">ResetTrafficType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId">ResetTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.flowLog.FlowLog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.flowLog.FlowLog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.flowLog.FlowLog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.flowLog.FlowLog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.flowLog.FlowLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.flowLog.FlowLog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.flowLog.FlowLog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.flowLog.FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.flowLog.FlowLog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.flowLog.FlowLog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.flowLog.FlowLog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.flowLog.FlowLog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.flowLog.FlowLog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.flowLog.FlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.flowLog.FlowLog.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.flowLog.FlowLog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.flowLog.FlowLog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.flowLog.FlowLog.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.flowLog.FlowLog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.flowLog.FlowLog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.flowLog.FlowLog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.flowLog.FlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.flowLog.FlowLog.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.flowLog.FlowLog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.flowLog.FlowLog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationOptions` <a name="PutDestinationOptions" id="@cdktn/provider-aws.flowLog.FlowLog.putDestinationOptions"></a>

```csharp
private void PutDestinationOptions(FlowLogDestinationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.flowLog.FlowLog.putDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---

##### `ResetDeliverCrossAccountRole` <a name="ResetDeliverCrossAccountRole" id="@cdktn/provider-aws.flowLog.FlowLog.resetDeliverCrossAccountRole"></a>

```csharp
private void ResetDeliverCrossAccountRole()
```

##### `ResetDestinationOptions` <a name="ResetDestinationOptions" id="@cdktn/provider-aws.flowLog.FlowLog.resetDestinationOptions"></a>

```csharp
private void ResetDestinationOptions()
```

##### `ResetEniId` <a name="ResetEniId" id="@cdktn/provider-aws.flowLog.FlowLog.resetEniId"></a>

```csharp
private void ResetEniId()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-aws.flowLog.FlowLog.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.flowLog.FlowLog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogDestination` <a name="ResetLogDestination" id="@cdktn/provider-aws.flowLog.FlowLog.resetLogDestination"></a>

```csharp
private void ResetLogDestination()
```

##### `ResetLogDestinationType` <a name="ResetLogDestinationType" id="@cdktn/provider-aws.flowLog.FlowLog.resetLogDestinationType"></a>

```csharp
private void ResetLogDestinationType()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-aws.flowLog.FlowLog.resetLogFormat"></a>

```csharp
private void ResetLogFormat()
```

##### `ResetMaxAggregationInterval` <a name="ResetMaxAggregationInterval" id="@cdktn/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval"></a>

```csharp
private void ResetMaxAggregationInterval()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.flowLog.FlowLog.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRegionalNatGatewayId` <a name="ResetRegionalNatGatewayId" id="@cdktn/provider-aws.flowLog.FlowLog.resetRegionalNatGatewayId"></a>

```csharp
private void ResetRegionalNatGatewayId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-aws.flowLog.FlowLog.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.flowLog.FlowLog.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.flowLog.FlowLog.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTrafficType` <a name="ResetTrafficType" id="@cdktn/provider-aws.flowLog.FlowLog.resetTrafficType"></a>

```csharp
private void ResetTrafficType()
```

##### `ResetTransitGatewayAttachmentId` <a name="ResetTransitGatewayAttachmentId" id="@cdktn/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId"></a>

```csharp
private void ResetTransitGatewayAttachmentId()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-aws.flowLog.FlowLog.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-aws.flowLog.FlowLog.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FlowLog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.flowLog.FlowLog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FlowLog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.flowLog.FlowLog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.flowLog.FlowLog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FlowLog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.flowLog.FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.flowLog.FlowLog.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FlowLog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.flowLog.FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.flowLog.FlowLog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FlowLog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FlowLog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.flowLog.FlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.flowLog.FlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FlowLog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.flowLog.FlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.flowLog.FlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.destinationOptions">DestinationOptions</a></code> | <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.deliverCrossAccountRoleInput">DeliverCrossAccountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.destinationOptionsInput">DestinationOptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.eniIdInput">EniIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.logDestinationInput">LogDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.logFormatInput">LogFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput">MaxAggregationIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.regionalNatGatewayIdInput">RegionalNatGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.trafficTypeInput">TrafficTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.deliverCrossAccountRole">DeliverCrossAccountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.eniId">EniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.logDestination">LogDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.logDestinationType">LogDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.regionalNatGatewayId">RegionalNatGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.trafficType">TrafficType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.flowLog.FlowLog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.flowLog.FlowLog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.flowLog.FlowLog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.flowLog.FlowLog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.flowLog.FlowLog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.flowLog.FlowLog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.flowLog.FlowLog.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.flowLog.FlowLog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.flowLog.FlowLog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.flowLog.FlowLog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.flowLog.FlowLog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.flowLog.FlowLog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.flowLog.FlowLog.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.flowLog.FlowLog.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationOptions`<sup>Required</sup> <a name="DestinationOptions" id="@cdktn/provider-aws.flowLog.FlowLog.property.destinationOptions"></a>

```csharp
public FlowLogDestinationOptionsOutputReference DestinationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a>

---

##### `DeliverCrossAccountRoleInput`<sup>Optional</sup> <a name="DeliverCrossAccountRoleInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.deliverCrossAccountRoleInput"></a>

```csharp
public string DeliverCrossAccountRoleInput { get; }
```

- *Type:* string

---

##### `DestinationOptionsInput`<sup>Optional</sup> <a name="DestinationOptionsInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.destinationOptionsInput"></a>

```csharp
public FlowLogDestinationOptions DestinationOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---

##### `EniIdInput`<sup>Optional</sup> <a name="EniIdInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.eniIdInput"></a>

```csharp
public string EniIdInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.logDestinationInput"></a>

```csharp
public string LogDestinationInput { get; }
```

- *Type:* string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput"></a>

```csharp
public string LogDestinationTypeInput { get; }
```

- *Type:* string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.logFormatInput"></a>

```csharp
public string LogFormatInput { get; }
```

- *Type:* string

---

##### `MaxAggregationIntervalInput`<sup>Optional</sup> <a name="MaxAggregationIntervalInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput"></a>

```csharp
public double MaxAggregationIntervalInput { get; }
```

- *Type:* double

---

##### `RegionalNatGatewayIdInput`<sup>Optional</sup> <a name="RegionalNatGatewayIdInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.regionalNatGatewayIdInput"></a>

```csharp
public string RegionalNatGatewayIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrafficTypeInput`<sup>Optional</sup> <a name="TrafficTypeInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.trafficTypeInput"></a>

```csharp
public string TrafficTypeInput { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput"></a>

```csharp
public string TransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.flowLog.FlowLog.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `DeliverCrossAccountRole`<sup>Required</sup> <a name="DeliverCrossAccountRole" id="@cdktn/provider-aws.flowLog.FlowLog.property.deliverCrossAccountRole"></a>

```csharp
public string DeliverCrossAccountRole { get; }
```

- *Type:* string

---

##### `EniId`<sup>Required</sup> <a name="EniId" id="@cdktn/provider-aws.flowLog.FlowLog.property.eniId"></a>

```csharp
public string EniId { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.flowLog.FlowLog.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.flowLog.FlowLog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktn/provider-aws.flowLog.FlowLog.property.logDestination"></a>

```csharp
public string LogDestination { get; }
```

- *Type:* string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktn/provider-aws.flowLog.FlowLog.property.logDestinationType"></a>

```csharp
public string LogDestinationType { get; }
```

- *Type:* string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-aws.flowLog.FlowLog.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `MaxAggregationInterval`<sup>Required</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-aws.flowLog.FlowLog.property.maxAggregationInterval"></a>

```csharp
public double MaxAggregationInterval { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.flowLog.FlowLog.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegionalNatGatewayId`<sup>Required</sup> <a name="RegionalNatGatewayId" id="@cdktn/provider-aws.flowLog.FlowLog.property.regionalNatGatewayId"></a>

```csharp
public string RegionalNatGatewayId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.flowLog.FlowLog.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.flowLog.FlowLog.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.flowLog.FlowLog.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktn/provider-aws.flowLog.FlowLog.property.trafficType"></a>

```csharp
public string TrafficType { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.flowLog.FlowLog.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.flowLog.FlowLog.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.flowLog.FlowLog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FlowLogConfig <a name="FlowLogConfig" id="@cdktn/provider-aws.flowLog.FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.flowLog.FlowLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FlowLogConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeliverCrossAccountRole = null,
    FlowLogDestinationOptions DestinationOptions = null,
    string EniId = null,
    string IamRoleArn = null,
    string Id = null,
    string LogDestination = null,
    string LogDestinationType = null,
    string LogFormat = null,
    double MaxAggregationInterval = null,
    string Region = null,
    string RegionalNatGatewayId = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TrafficType = null,
    string TransitGatewayAttachmentId = null,
    string TransitGatewayId = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.deliverCrossAccountRole">DeliverCrossAccountRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#deliver_cross_account_role FlowLog#deliver_cross_account_role}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.destinationOptions">DestinationOptions</a></code> | <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | destination_options block. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.eniId">EniId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#eni_id FlowLog#eni_id}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#iam_role_arn FlowLog#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#id FlowLog#id}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.logDestination">LogDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#log_destination FlowLog#log_destination}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.logDestinationType">LogDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#log_destination_type FlowLog#log_destination_type}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.logFormat">LogFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#log_format FlowLog#log_format}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.regionalNatGatewayId">RegionalNatGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#regional_nat_gateway_id FlowLog#regional_nat_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#subnet_id FlowLog#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#tags FlowLog#tags}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#tags_all FlowLog#tags_all}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.trafficType">TrafficType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#traffic_type FlowLog#traffic_type}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#transit_gateway_id FlowLog#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#vpc_id FlowLog#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeliverCrossAccountRole`<sup>Optional</sup> <a name="DeliverCrossAccountRole" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.deliverCrossAccountRole"></a>

```csharp
public string DeliverCrossAccountRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#deliver_cross_account_role FlowLog#deliver_cross_account_role}.

---

##### `DestinationOptions`<sup>Optional</sup> <a name="DestinationOptions" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.destinationOptions"></a>

```csharp
public FlowLogDestinationOptions DestinationOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

destination_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#destination_options FlowLog#destination_options}

---

##### `EniId`<sup>Optional</sup> <a name="EniId" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.eniId"></a>

```csharp
public string EniId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#eni_id FlowLog#eni_id}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#iam_role_arn FlowLog#iam_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#id FlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogDestination`<sup>Optional</sup> <a name="LogDestination" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.logDestination"></a>

```csharp
public string LogDestination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#log_destination FlowLog#log_destination}.

---

##### `LogDestinationType`<sup>Optional</sup> <a name="LogDestinationType" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.logDestinationType"></a>

```csharp
public string LogDestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#log_destination_type FlowLog#log_destination_type}.

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.logFormat"></a>

```csharp
public string LogFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#log_format FlowLog#log_format}.

---

##### `MaxAggregationInterval`<sup>Optional</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval"></a>

```csharp
public double MaxAggregationInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#region FlowLog#region}

---

##### `RegionalNatGatewayId`<sup>Optional</sup> <a name="RegionalNatGatewayId" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.regionalNatGatewayId"></a>

```csharp
public string RegionalNatGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#regional_nat_gateway_id FlowLog#regional_nat_gateway_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#subnet_id FlowLog#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#tags FlowLog#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#tags_all FlowLog#tags_all}.

---

##### `TrafficType`<sup>Optional</sup> <a name="TrafficType" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.trafficType"></a>

```csharp
public string TrafficType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#traffic_type FlowLog#traffic_type}.

---

##### `TransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}.

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#transit_gateway_id FlowLog#transit_gateway_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-aws.flowLog.FlowLogConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#vpc_id FlowLog#vpc_id}.

---

### FlowLogDestinationOptions <a name="FlowLogDestinationOptions" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FlowLogDestinationOptions {
    string FileFormat = null,
    bool|IResolvable HiveCompatiblePartitions = null,
    bool|IResolvable PerHourPartition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat">FileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#file_format FlowLog#file_format}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions">HiveCompatiblePartitions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition">PerHourPartition</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#per_hour_partition FlowLog#per_hour_partition}. |

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat"></a>

```csharp
public string FileFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#file_format FlowLog#file_format}.

---

##### `HiveCompatiblePartitions`<sup>Optional</sup> <a name="HiveCompatiblePartitions" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```csharp
public bool|IResolvable HiveCompatiblePartitions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}.

---

##### `PerHourPartition`<sup>Optional</sup> <a name="PerHourPartition" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition"></a>

```csharp
public bool|IResolvable PerHourPartition { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/flow_log#per_hour_partition FlowLog#per_hour_partition}.

---

## Classes <a name="Classes" id="Classes"></a>

### FlowLogDestinationOptionsOutputReference <a name="FlowLogDestinationOptionsOutputReference" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FlowLogDestinationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">ResetHiveCompatiblePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition">ResetPerHourPartition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```csharp
private void ResetFileFormat()
```

##### `ResetHiveCompatiblePartitions` <a name="ResetHiveCompatiblePartitions" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```csharp
private void ResetHiveCompatiblePartitions()
```

##### `ResetPerHourPartition` <a name="ResetPerHourPartition" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```csharp
private void ResetPerHourPartition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput">FileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">HiveCompatiblePartitionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">PerHourPartitionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat">FileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">HiveCompatiblePartitions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition">PerHourPartition</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```csharp
public string FileFormatInput { get; }
```

- *Type:* string

---

##### `HiveCompatiblePartitionsInput`<sup>Optional</sup> <a name="HiveCompatiblePartitionsInput" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```csharp
public bool|IResolvable HiveCompatiblePartitionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PerHourPartitionInput`<sup>Optional</sup> <a name="PerHourPartitionInput" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```csharp
public bool|IResolvable PerHourPartitionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```csharp
public string FileFormat { get; }
```

- *Type:* string

---

##### `HiveCompatiblePartitions`<sup>Required</sup> <a name="HiveCompatiblePartitions" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```csharp
public bool|IResolvable HiveCompatiblePartitions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PerHourPartition`<sup>Required</sup> <a name="PerHourPartition" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```csharp
public bool|IResolvable PerHourPartition { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```csharp
public FlowLogDestinationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---



