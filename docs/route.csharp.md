# `route` Submodule <a name="`route` Submodule" id="@cdktn/provider-aws.route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route <a name="Route" id="@cdktn/provider-aws.route.Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route aws_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route.Route.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route(Construct Scope, string Id, RouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route.Route.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route.Route.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route.Route.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.route.RouteConfig">RouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route.Route.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route.Route.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.route.Route.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route.RouteConfig">RouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route.Route.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route.Route.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route.Route.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route.Route.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route.Route.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route.Route.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route.Route.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route.Route.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route.Route.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route.Route.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetCarrierGatewayId">ResetCarrierGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetCoreNetworkArn">ResetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetDestinationCidrBlock">ResetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetDestinationIpv6CidrBlock">ResetDestinationIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetDestinationPrefixListId">ResetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetEgressOnlyGatewayId">ResetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetGatewayId">ResetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetLocalGatewayId">ResetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetNatGatewayId">ResetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetOdbNetworkArn">ResetOdbNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.resetVpcPeeringConnectionId">ResetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route.Route.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.route.Route.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.route.Route.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route.Route.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.route.Route.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route.Route.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route.Route.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.route.Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route.Route.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route.Route.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route.Route.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route.Route.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route.Route.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route.Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route.Route.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route.Route.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route.Route.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route.Route.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route.Route.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route.Route.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route.Route.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route.Route.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route.Route.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route.Route.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route.Route.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route.Route.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route.Route.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route.Route.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route.Route.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route.Route.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route.Route.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route.Route.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.route.Route.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route.Route.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route.Route.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.route.Route.putTimeouts"></a>

```csharp
private void PutTimeouts(RouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route.Route.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.route.RouteTimeouts">RouteTimeouts</a>

---

##### `ResetCarrierGatewayId` <a name="ResetCarrierGatewayId" id="@cdktn/provider-aws.route.Route.resetCarrierGatewayId"></a>

```csharp
private void ResetCarrierGatewayId()
```

##### `ResetCoreNetworkArn` <a name="ResetCoreNetworkArn" id="@cdktn/provider-aws.route.Route.resetCoreNetworkArn"></a>

```csharp
private void ResetCoreNetworkArn()
```

##### `ResetDestinationCidrBlock` <a name="ResetDestinationCidrBlock" id="@cdktn/provider-aws.route.Route.resetDestinationCidrBlock"></a>

```csharp
private void ResetDestinationCidrBlock()
```

##### `ResetDestinationIpv6CidrBlock` <a name="ResetDestinationIpv6CidrBlock" id="@cdktn/provider-aws.route.Route.resetDestinationIpv6CidrBlock"></a>

```csharp
private void ResetDestinationIpv6CidrBlock()
```

##### `ResetDestinationPrefixListId` <a name="ResetDestinationPrefixListId" id="@cdktn/provider-aws.route.Route.resetDestinationPrefixListId"></a>

```csharp
private void ResetDestinationPrefixListId()
```

##### `ResetEgressOnlyGatewayId` <a name="ResetEgressOnlyGatewayId" id="@cdktn/provider-aws.route.Route.resetEgressOnlyGatewayId"></a>

```csharp
private void ResetEgressOnlyGatewayId()
```

##### `ResetGatewayId` <a name="ResetGatewayId" id="@cdktn/provider-aws.route.Route.resetGatewayId"></a>

```csharp
private void ResetGatewayId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route.Route.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalGatewayId` <a name="ResetLocalGatewayId" id="@cdktn/provider-aws.route.Route.resetLocalGatewayId"></a>

```csharp
private void ResetLocalGatewayId()
```

##### `ResetNatGatewayId` <a name="ResetNatGatewayId" id="@cdktn/provider-aws.route.Route.resetNatGatewayId"></a>

```csharp
private void ResetNatGatewayId()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-aws.route.Route.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetOdbNetworkArn` <a name="ResetOdbNetworkArn" id="@cdktn/provider-aws.route.Route.resetOdbNetworkArn"></a>

```csharp
private void ResetOdbNetworkArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.route.Route.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.route.Route.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-aws.route.Route.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-aws.route.Route.resetVpcEndpointId"></a>

```csharp
private void ResetVpcEndpointId()
```

##### `ResetVpcPeeringConnectionId` <a name="ResetVpcPeeringConnectionId" id="@cdktn/provider-aws.route.Route.resetVpcPeeringConnectionId"></a>

```csharp
private void ResetVpcPeeringConnectionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route.Route.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route.Route.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route.Route.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route.Route.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route.Route.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route.Route.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route.Route.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route.Route.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route.Route.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route.Route.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.route.Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.route.Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route.Route.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route.Route.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route.Route.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.instanceOwnerId">InstanceOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference">RouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.carrierGatewayIdInput">CarrierGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.coreNetworkArnInput">CoreNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.destinationIpv6CidrBlockInput">DestinationIpv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.destinationPrefixListIdInput">DestinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.egressOnlyGatewayIdInput">EgressOnlyGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.natGatewayIdInput">NatGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.odbNetworkArnInput">OdbNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route.RouteTimeouts">RouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.vpcPeeringConnectionIdInput">VpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.carrierGatewayId">CarrierGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.destinationIpv6CidrBlock">DestinationIpv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.egressOnlyGatewayId">EgressOnlyGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.natGatewayId">NatGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.routeTableId">RouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.Route.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route.Route.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route.Route.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route.Route.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route.Route.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route.Route.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route.Route.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route.Route.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route.Route.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route.Route.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route.Route.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route.Route.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route.Route.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route.Route.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route.Route.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-aws.route.Route.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceOwnerId`<sup>Required</sup> <a name="InstanceOwnerId" id="@cdktn/provider-aws.route.Route.property.instanceOwnerId"></a>

```csharp
public string InstanceOwnerId { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-aws.route.Route.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.route.Route.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.route.Route.property.timeouts"></a>

```csharp
public RouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference">RouteTimeoutsOutputReference</a>

---

##### `CarrierGatewayIdInput`<sup>Optional</sup> <a name="CarrierGatewayIdInput" id="@cdktn/provider-aws.route.Route.property.carrierGatewayIdInput"></a>

```csharp
public string CarrierGatewayIdInput { get; }
```

- *Type:* string

---

##### `CoreNetworkArnInput`<sup>Optional</sup> <a name="CoreNetworkArnInput" id="@cdktn/provider-aws.route.Route.property.coreNetworkArnInput"></a>

```csharp
public string CoreNetworkArnInput { get; }
```

- *Type:* string

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktn/provider-aws.route.Route.property.destinationCidrBlockInput"></a>

```csharp
public string DestinationCidrBlockInput { get; }
```

- *Type:* string

---

##### `DestinationIpv6CidrBlockInput`<sup>Optional</sup> <a name="DestinationIpv6CidrBlockInput" id="@cdktn/provider-aws.route.Route.property.destinationIpv6CidrBlockInput"></a>

```csharp
public string DestinationIpv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `DestinationPrefixListIdInput`<sup>Optional</sup> <a name="DestinationPrefixListIdInput" id="@cdktn/provider-aws.route.Route.property.destinationPrefixListIdInput"></a>

```csharp
public string DestinationPrefixListIdInput { get; }
```

- *Type:* string

---

##### `EgressOnlyGatewayIdInput`<sup>Optional</sup> <a name="EgressOnlyGatewayIdInput" id="@cdktn/provider-aws.route.Route.property.egressOnlyGatewayIdInput"></a>

```csharp
public string EgressOnlyGatewayIdInput { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-aws.route.Route.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route.Route.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktn/provider-aws.route.Route.property.localGatewayIdInput"></a>

```csharp
public string LocalGatewayIdInput { get; }
```

- *Type:* string

---

##### `NatGatewayIdInput`<sup>Optional</sup> <a name="NatGatewayIdInput" id="@cdktn/provider-aws.route.Route.property.natGatewayIdInput"></a>

```csharp
public string NatGatewayIdInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-aws.route.Route.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `OdbNetworkArnInput`<sup>Optional</sup> <a name="OdbNetworkArnInput" id="@cdktn/provider-aws.route.Route.property.odbNetworkArnInput"></a>

```csharp
public string OdbNetworkArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.route.Route.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="@cdktn/provider-aws.route.Route.property.routeTableIdInput"></a>

```csharp
public string RouteTableIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.route.Route.property.timeoutsInput"></a>

```csharp
public IResolvable|RouteTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.route.RouteTimeouts">RouteTimeouts</a>

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-aws.route.Route.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-aws.route.Route.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `VpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="VpcPeeringConnectionIdInput" id="@cdktn/provider-aws.route.Route.property.vpcPeeringConnectionIdInput"></a>

```csharp
public string VpcPeeringConnectionIdInput { get; }
```

- *Type:* string

---

##### `CarrierGatewayId`<sup>Required</sup> <a name="CarrierGatewayId" id="@cdktn/provider-aws.route.Route.property.carrierGatewayId"></a>

```csharp
public string CarrierGatewayId { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-aws.route.Route.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.route.Route.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; }
```

- *Type:* string

---

##### `DestinationIpv6CidrBlock`<sup>Required</sup> <a name="DestinationIpv6CidrBlock" id="@cdktn/provider-aws.route.Route.property.destinationIpv6CidrBlock"></a>

```csharp
public string DestinationIpv6CidrBlock { get; }
```

- *Type:* string

---

##### `DestinationPrefixListId`<sup>Required</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-aws.route.Route.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; }
```

- *Type:* string

---

##### `EgressOnlyGatewayId`<sup>Required</sup> <a name="EgressOnlyGatewayId" id="@cdktn/provider-aws.route.Route.property.egressOnlyGatewayId"></a>

```csharp
public string EgressOnlyGatewayId { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-aws.route.Route.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route.Route.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-aws.route.Route.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `NatGatewayId`<sup>Required</sup> <a name="NatGatewayId" id="@cdktn/provider-aws.route.Route.property.natGatewayId"></a>

```csharp
public string NatGatewayId { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-aws.route.Route.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.route.Route.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.route.Route.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktn/provider-aws.route.Route.property.routeTableId"></a>

```csharp
public string RouteTableId { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.route.Route.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.route.Route.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-aws.route.Route.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route.Route.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route.Route.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RouteConfig <a name="RouteConfig" id="@cdktn/provider-aws.route.RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route.RouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RouteTableId,
    string CarrierGatewayId = null,
    string CoreNetworkArn = null,
    string DestinationCidrBlock = null,
    string DestinationIpv6CidrBlock = null,
    string DestinationPrefixListId = null,
    string EgressOnlyGatewayId = null,
    string GatewayId = null,
    string Id = null,
    string LocalGatewayId = null,
    string NatGatewayId = null,
    string NetworkInterfaceId = null,
    string OdbNetworkArn = null,
    string Region = null,
    RouteTimeouts Timeouts = null,
    string TransitGatewayId = null,
    string VpcEndpointId = null,
    string VpcPeeringConnectionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.routeTableId">RouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#route_table_id Route#route_table_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.carrierGatewayId">CarrierGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#carrier_gateway_id Route#carrier_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#core_network_arn Route#core_network_arn}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#destination_cidr_block Route#destination_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.destinationIpv6CidrBlock">DestinationIpv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#destination_ipv6_cidr_block Route#destination_ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#destination_prefix_list_id Route#destination_prefix_list_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.egressOnlyGatewayId">EgressOnlyGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#egress_only_gateway_id Route#egress_only_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#gateway_id Route#gateway_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#id Route#id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#local_gateway_id Route#local_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.natGatewayId">NatGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#nat_gateway_id Route#nat_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#network_interface_id Route#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#odb_network_arn Route#odb_network_arn}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route.RouteTimeouts">RouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#transit_gateway_id Route#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#vpc_endpoint_id Route#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.route.RouteConfig.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#vpc_peering_connection_id Route#vpc_peering_connection_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route.RouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route.RouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route.RouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route.RouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route.RouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route.RouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route.RouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktn/provider-aws.route.RouteConfig.property.routeTableId"></a>

```csharp
public string RouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#route_table_id Route#route_table_id}.

---

##### `CarrierGatewayId`<sup>Optional</sup> <a name="CarrierGatewayId" id="@cdktn/provider-aws.route.RouteConfig.property.carrierGatewayId"></a>

```csharp
public string CarrierGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#carrier_gateway_id Route#carrier_gateway_id}.

---

##### `CoreNetworkArn`<sup>Optional</sup> <a name="CoreNetworkArn" id="@cdktn/provider-aws.route.RouteConfig.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#core_network_arn Route#core_network_arn}.

---

##### `DestinationCidrBlock`<sup>Optional</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.route.RouteConfig.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#destination_cidr_block Route#destination_cidr_block}.

---

##### `DestinationIpv6CidrBlock`<sup>Optional</sup> <a name="DestinationIpv6CidrBlock" id="@cdktn/provider-aws.route.RouteConfig.property.destinationIpv6CidrBlock"></a>

```csharp
public string DestinationIpv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#destination_ipv6_cidr_block Route#destination_ipv6_cidr_block}.

---

##### `DestinationPrefixListId`<sup>Optional</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-aws.route.RouteConfig.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#destination_prefix_list_id Route#destination_prefix_list_id}.

---

##### `EgressOnlyGatewayId`<sup>Optional</sup> <a name="EgressOnlyGatewayId" id="@cdktn/provider-aws.route.RouteConfig.property.egressOnlyGatewayId"></a>

```csharp
public string EgressOnlyGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#egress_only_gateway_id Route#egress_only_gateway_id}.

---

##### `GatewayId`<sup>Optional</sup> <a name="GatewayId" id="@cdktn/provider-aws.route.RouteConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#gateway_id Route#gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route.RouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#id Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalGatewayId`<sup>Optional</sup> <a name="LocalGatewayId" id="@cdktn/provider-aws.route.RouteConfig.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#local_gateway_id Route#local_gateway_id}.

---

##### `NatGatewayId`<sup>Optional</sup> <a name="NatGatewayId" id="@cdktn/provider-aws.route.RouteConfig.property.natGatewayId"></a>

```csharp
public string NatGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#nat_gateway_id Route#nat_gateway_id}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-aws.route.RouteConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#network_interface_id Route#network_interface_id}.

---

##### `OdbNetworkArn`<sup>Optional</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.route.RouteConfig.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#odb_network_arn Route#odb_network_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.route.RouteConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#region Route#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.route.RouteConfig.property.timeouts"></a>

```csharp
public RouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.route.RouteTimeouts">RouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#timeouts Route#timeouts}

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.route.RouteConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#transit_gateway_id Route#transit_gateway_id}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.route.RouteConfig.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#vpc_endpoint_id Route#vpc_endpoint_id}.

---

##### `VpcPeeringConnectionId`<sup>Optional</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-aws.route.RouteConfig.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#vpc_peering_connection_id Route#vpc_peering_connection_id}.

---

### RouteTimeouts <a name="RouteTimeouts" id="@cdktn/provider-aws.route.RouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route.RouteTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RouteTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#create Route#create}. |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#delete Route#delete}. |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#update Route#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.route.RouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#create Route#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.route.RouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#delete Route#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.route.RouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route#update Route#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RouteTimeoutsOutputReference <a name="RouteTimeoutsOutputReference" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route.RouteTimeouts">RouteTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.route.RouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RouteTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.route.RouteTimeouts">RouteTimeouts</a>

---



