# `ecsExpressGatewayService` Submodule <a name="`ecsExpressGatewayService` Submodule" id="@cdktn/provider-aws.ecsExpressGatewayService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsExpressGatewayService <a name="EcsExpressGatewayService" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service aws_ecs_express_gateway_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayService(scope Construct, id *string, config EcsExpressGatewayServiceConfig) EcsExpressGatewayService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig">EcsExpressGatewayServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig">EcsExpressGatewayServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer">PutPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget">PutScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer">ResetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget">ResetScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn">ResetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetWaitForSteadyState">ResetWaitForSteadyState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrimaryContainer` <a name="PutPrimaryContainer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer"></a>

```go
func PutPrimaryContainer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScalingTarget` <a name="PutScalingTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget"></a>

```go
func PutScalingTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts"></a>

```go
func PutTimeouts(value EcsExpressGatewayServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

---

##### `ResetCluster` <a name="ResetCluster" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath"></a>

```go
func ResetHealthCheckPath()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetPrimaryContainer` <a name="ResetPrimaryContainer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer"></a>

```go
func ResetPrimaryContainer()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScalingTarget` <a name="ResetScalingTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget"></a>

```go
func ResetScalingTarget()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaskRoleArn` <a name="ResetTaskRoleArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn"></a>

```go
func ResetTaskRoleArn()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWaitForSteadyState` <a name="ResetWaitForSteadyState" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetWaitForSteadyState"></a>

```go
func ResetWaitForSteadyState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EcsExpressGatewayService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.EcsExpressGatewayService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.EcsExpressGatewayService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.EcsExpressGatewayService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.EcsExpressGatewayService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EcsExpressGatewayService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EcsExpressGatewayService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EcsExpressGatewayService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EcsExpressGatewayService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.currentDeployment">CurrentDeployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.ingressPaths">IngressPaths</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList">EcsExpressGatewayServiceIngressPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList">EcsExpressGatewayServiceNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList">EcsExpressGatewayServicePrimaryContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget">ScalingTarget</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList">EcsExpressGatewayServiceScalingTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceRevisionArn">ServiceRevisionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference">EcsExpressGatewayServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput">InfrastructureRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput">PrimaryContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput">ScalingTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput">TaskRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyStateInput">WaitForSteadyStateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyState">WaitForSteadyState</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentDeployment`<sup>Required</sup> <a name="CurrentDeployment" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.currentDeployment"></a>

```go
func CurrentDeployment() *string
```

- *Type:* *string

---

##### `IngressPaths`<sup>Required</sup> <a name="IngressPaths" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.ingressPaths"></a>

```go
func IngressPaths() EcsExpressGatewayServiceIngressPathsList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList">EcsExpressGatewayServiceIngressPathsList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration"></a>

```go
func NetworkConfiguration() EcsExpressGatewayServiceNetworkConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList">EcsExpressGatewayServiceNetworkConfigurationList</a>

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer"></a>

```go
func PrimaryContainer() EcsExpressGatewayServicePrimaryContainerList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList">EcsExpressGatewayServicePrimaryContainerList</a>

---

##### `ScalingTarget`<sup>Required</sup> <a name="ScalingTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget"></a>

```go
func ScalingTarget() EcsExpressGatewayServiceScalingTargetList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList">EcsExpressGatewayServiceScalingTargetList</a>

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

##### `ServiceRevisionArn`<sup>Required</sup> <a name="ServiceRevisionArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceRevisionArn"></a>

```go
func ServiceRevisionArn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeouts"></a>

```go
func Timeouts() EcsExpressGatewayServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference">EcsExpressGatewayServiceTimeoutsOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput"></a>

```go
func HealthCheckPathInput() *string
```

- *Type:* *string

---

##### `InfrastructureRoleArnInput`<sup>Optional</sup> <a name="InfrastructureRoleArnInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput"></a>

```go
func InfrastructureRoleArnInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryContainerInput`<sup>Optional</sup> <a name="PrimaryContainerInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput"></a>

```go
func PrimaryContainerInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScalingTargetInput`<sup>Optional</sup> <a name="ScalingTargetInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput"></a>

```go
func ScalingTargetInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskRoleArnInput`<sup>Optional</sup> <a name="TaskRoleArnInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput"></a>

```go
func TaskRoleArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForSteadyStateInput`<sup>Optional</sup> <a name="WaitForSteadyStateInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyStateInput"></a>

```go
func WaitForSteadyStateInput() interface{}
```

- *Type:* interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn"></a>

```go
func InfrastructureRoleArn() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn"></a>

```go
func TaskRoleArn() *string
```

- *Type:* *string

---

##### `WaitForSteadyState`<sup>Required</sup> <a name="WaitForSteadyState" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyState"></a>

```go
func WaitForSteadyState() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsExpressGatewayServiceConfig <a name="EcsExpressGatewayServiceConfig" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExecutionRoleArn: *string,
	InfrastructureRoleArn: *string,
	Cluster: *string,
	Cpu: *string,
	HealthCheckPath: *string,
	Memory: *string,
	NetworkConfiguration: interface{},
	PrimaryContainer: interface{},
	Region: *string,
	ScalingTarget: interface{},
	ServiceName: *string,
	Tags: *map[string]*string,
	TaskRoleArn: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts,
	WaitForSteadyState: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster">Cluster</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu">Cpu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer">PrimaryContainer</a></code> | <code>interface{}</code> | primary_container block. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget">ScalingTarget</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.waitForSteadyState">WaitForSteadyState</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}.

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn"></a>

```go
InfrastructureRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}.

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}.

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath"></a>

```go
HealthCheckPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}.

---

##### `PrimaryContainer`<sup>Optional</sup> <a name="PrimaryContainer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer"></a>

```go
PrimaryContainer interface{}
```

- *Type:* interface{}

primary_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#region EcsExpressGatewayService#region}

---

##### `ScalingTarget`<sup>Optional</sup> <a name="ScalingTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget"></a>

```go
ScalingTarget interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}.

---

##### `TaskRoleArn`<sup>Optional</sup> <a name="TaskRoleArn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn"></a>

```go
TaskRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.timeouts"></a>

```go
Timeouts EcsExpressGatewayServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#timeouts EcsExpressGatewayService#timeouts}

---

##### `WaitForSteadyState`<sup>Optional</sup> <a name="WaitForSteadyState" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.waitForSteadyState"></a>

```go
WaitForSteadyState interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}.

---

### EcsExpressGatewayServiceIngressPaths <a name="EcsExpressGatewayServiceIngressPaths" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServiceIngressPaths {

}
```


### EcsExpressGatewayServiceNetworkConfiguration <a name="EcsExpressGatewayServiceNetworkConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServiceNetworkConfiguration {
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}.

---

### EcsExpressGatewayServicePrimaryContainer <a name="EcsExpressGatewayServicePrimaryContainer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServicePrimaryContainer {
	Image: *string,
	AwsLogsConfiguration: interface{},
	Command: *[]*string,
	ContainerPort: *f64,
	Environment: interface{},
	RepositoryCredentials: interface{},
	Secret: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration">AwsLogsConfiguration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command">Command</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment">Environment</a></code> | <code>interface{}</code> | environment block. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials">RepositoryCredentials</a></code> | <code>interface{}</code> | repository_credentials block. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}.

---

##### `AwsLogsConfiguration`<sup>Optional</sup> <a name="AwsLogsConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration"></a>

```go
AwsLogsConfiguration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}.

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment"></a>

```go
Environment interface{}
```

- *Type:* interface{}

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}

---

##### `RepositoryCredentials`<sup>Optional</sup> <a name="RepositoryCredentials" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials"></a>

```go
RepositoryCredentials interface{}
```

- *Type:* interface{}

repository_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#secret EcsExpressGatewayService#secret}

---

### EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration {
	LogGroup: *string,
	LogStreamPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup">LogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix">LogStreamPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}.

---

##### `LogStreamPrefix`<sup>Optional</sup> <a name="LogStreamPrefix" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix"></a>

```go
LogStreamPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}.

---

### EcsExpressGatewayServicePrimaryContainerEnvironment <a name="EcsExpressGatewayServicePrimaryContainerEnvironment" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServicePrimaryContainerEnvironment {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}.

---

### EcsExpressGatewayServicePrimaryContainerRepositoryCredentials <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentials" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials {
	CredentialsParameter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}. |

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter"></a>

```go
CredentialsParameter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}.

---

### EcsExpressGatewayServicePrimaryContainerSecret <a name="EcsExpressGatewayServicePrimaryContainerSecret" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServicePrimaryContainerSecret {
	Name: *string,
	ValueFrom: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.valueFrom"></a>

```go
ValueFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}.

---

### EcsExpressGatewayServiceScalingTarget <a name="EcsExpressGatewayServiceScalingTarget" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServiceScalingTarget {
	AutoScalingMetric: *string,
	AutoScalingTargetValue: *f64,
	MaxTaskCount: *f64,
	MinTaskCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue">AutoScalingTargetValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount">MaxTaskCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount">MinTaskCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}. |

---

##### `AutoScalingMetric`<sup>Optional</sup> <a name="AutoScalingMetric" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric"></a>

```go
AutoScalingMetric *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}.

---

##### `AutoScalingTargetValue`<sup>Optional</sup> <a name="AutoScalingTargetValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue"></a>

```go
AutoScalingTargetValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}.

---

##### `MaxTaskCount`<sup>Optional</sup> <a name="MaxTaskCount" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount"></a>

```go
MaxTaskCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}.

---

##### `MinTaskCount`<sup>Optional</sup> <a name="MinTaskCount" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount"></a>

```go
MinTaskCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}.

---

### EcsExpressGatewayServiceTimeouts <a name="EcsExpressGatewayServiceTimeouts" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

&ecsexpressgatewayservice.EcsExpressGatewayServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#create EcsExpressGatewayService#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#delete EcsExpressGatewayService#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_express_gateway_service#update EcsExpressGatewayService#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EcsExpressGatewayServiceIngressPathsList <a name="EcsExpressGatewayServiceIngressPathsList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServiceIngressPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServiceIngressPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServiceIngressPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EcsExpressGatewayServiceIngressPathsOutputReference <a name="EcsExpressGatewayServiceIngressPathsOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServiceIngressPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServiceIngressPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths">EcsExpressGatewayServiceIngressPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsExpressGatewayServiceIngressPaths
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths">EcsExpressGatewayServiceIngressPaths</a>

---


### EcsExpressGatewayServiceNetworkConfigurationList <a name="EcsExpressGatewayServiceNetworkConfigurationList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServiceNetworkConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServiceNetworkConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServiceNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServiceNetworkConfigurationOutputReference <a name="EcsExpressGatewayServiceNetworkConfigurationOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServiceNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServiceNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix">ResetLogStreamPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```

##### `ResetLogStreamPrefix` <a name="ResetLogStreamPrefix" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix"></a>

```go
func ResetLogStreamPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput">LogStreamPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">LogStreamPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogStreamPrefixInput`<sup>Optional</sup> <a name="LogStreamPrefixInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput"></a>

```go
func LogStreamPrefixInput() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStreamPrefix`<sup>Required</sup> <a name="LogStreamPrefix" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```go
func LogStreamPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentList <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServicePrimaryContainerEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerList <a name="EcsExpressGatewayServicePrimaryContainerList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServicePrimaryContainerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServicePrimaryContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerOutputReference <a name="EcsExpressGatewayServicePrimaryContainerOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServicePrimaryContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration">PutAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials">PutRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration">ResetAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials">ResetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsLogsConfiguration` <a name="PutAwsLogsConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration"></a>

```go
func PutAwsLogsConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRepositoryCredentials` <a name="PutRepositoryCredentials" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials"></a>

```go
func PutRepositoryCredentials(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsLogsConfiguration` <a name="ResetAwsLogsConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration"></a>

```go
func ResetAwsLogsConfiguration()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort"></a>

```go
func ResetContainerPort()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetRepositoryCredentials` <a name="ResetRepositoryCredentials" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials"></a>

```go
func ResetRepositoryCredentials()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration">AwsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList">EcsExpressGatewayServicePrimaryContainerSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput">AwsLogsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput">RepositoryCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsLogsConfiguration`<sup>Required</sup> <a name="AwsLogsConfiguration" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```go
func AwsLogsConfiguration() EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment"></a>

```go
func Environment() EcsExpressGatewayServicePrimaryContainerEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a>

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials"></a>

```go
func RepositoryCredentials() EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secret"></a>

```go
func Secret() EcsExpressGatewayServicePrimaryContainerSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList">EcsExpressGatewayServicePrimaryContainerSecretList</a>

---

##### `AwsLogsConfigurationInput`<sup>Optional</sup> <a name="AwsLogsConfigurationInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput"></a>

```go
func AwsLogsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsInput`<sup>Optional</sup> <a name="RepositoryCredentialsInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput"></a>

```go
func RepositoryCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput">CredentialsParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialsParameterInput`<sup>Optional</sup> <a name="CredentialsParameterInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```go
func CredentialsParameterInput() *string
```

- *Type:* *string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```go
func CredentialsParameter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerSecretList <a name="EcsExpressGatewayServicePrimaryContainerSecretList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServicePrimaryContainerSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServicePrimaryContainerSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServicePrimaryContainerSecretOutputReference <a name="EcsExpressGatewayServicePrimaryContainerSecretOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServicePrimaryContainerSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServicePrimaryContainerSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFromInput"></a>

```go
func ValueFromInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServiceScalingTargetList <a name="EcsExpressGatewayServiceScalingTargetList" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServiceScalingTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsExpressGatewayServiceScalingTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get"></a>

```go
func Get(index *f64) EcsExpressGatewayServiceScalingTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServiceScalingTargetOutputReference <a name="EcsExpressGatewayServiceScalingTargetOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServiceScalingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsExpressGatewayServiceScalingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric">ResetAutoScalingMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue">ResetAutoScalingTargetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount">ResetMaxTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount">ResetMinTaskCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoScalingMetric` <a name="ResetAutoScalingMetric" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric"></a>

```go
func ResetAutoScalingMetric()
```

##### `ResetAutoScalingTargetValue` <a name="ResetAutoScalingTargetValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue"></a>

```go
func ResetAutoScalingTargetValue()
```

##### `ResetMaxTaskCount` <a name="ResetMaxTaskCount" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount"></a>

```go
func ResetMaxTaskCount()
```

##### `ResetMinTaskCount` <a name="ResetMinTaskCount" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount"></a>

```go
func ResetMinTaskCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput">AutoScalingMetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput">AutoScalingTargetValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput">MaxTaskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput">MinTaskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue">AutoScalingTargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount">MaxTaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount">MinTaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingMetricInput`<sup>Optional</sup> <a name="AutoScalingMetricInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput"></a>

```go
func AutoScalingMetricInput() *string
```

- *Type:* *string

---

##### `AutoScalingTargetValueInput`<sup>Optional</sup> <a name="AutoScalingTargetValueInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput"></a>

```go
func AutoScalingTargetValueInput() *f64
```

- *Type:* *f64

---

##### `MaxTaskCountInput`<sup>Optional</sup> <a name="MaxTaskCountInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput"></a>

```go
func MaxTaskCountInput() *f64
```

- *Type:* *f64

---

##### `MinTaskCountInput`<sup>Optional</sup> <a name="MinTaskCountInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput"></a>

```go
func MinTaskCountInput() *f64
```

- *Type:* *f64

---

##### `AutoScalingMetric`<sup>Required</sup> <a name="AutoScalingMetric" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric"></a>

```go
func AutoScalingMetric() *string
```

- *Type:* *string

---

##### `AutoScalingTargetValue`<sup>Required</sup> <a name="AutoScalingTargetValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```go
func AutoScalingTargetValue() *f64
```

- *Type:* *f64

---

##### `MaxTaskCount`<sup>Required</sup> <a name="MaxTaskCount" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount"></a>

```go
func MaxTaskCount() *f64
```

- *Type:* *f64

---

##### `MinTaskCount`<sup>Required</sup> <a name="MinTaskCount" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount"></a>

```go
func MinTaskCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsExpressGatewayServiceTimeoutsOutputReference <a name="EcsExpressGatewayServiceTimeoutsOutputReference" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/ecsexpressgatewayservice"

ecsexpressgatewayservice.NewEcsExpressGatewayServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsExpressGatewayServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



