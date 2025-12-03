# `ecsExpressGatewayService` Submodule <a name="`ecsExpressGatewayService` Submodule" id="@cdktf/provider-aws.ecsExpressGatewayService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsExpressGatewayService <a name="EcsExpressGatewayService" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service aws_ecs_express_gateway_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayService(scope: Construct, id: string, config: EcsExpressGatewayServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig">EcsExpressGatewayServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig">EcsExpressGatewayServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer">putPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget">putScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer">resetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget">resetScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn">resetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetWaitForSteadyState">resetWaitForSteadyState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: IResolvable | EcsExpressGatewayServiceNetworkConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>[]

---

##### `putPrimaryContainer` <a name="putPrimaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer"></a>

```typescript
public putPrimaryContainer(value: IResolvable | EcsExpressGatewayServicePrimaryContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>[]

---

##### `putScalingTarget` <a name="putScalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget"></a>

```typescript
public putScalingTarget(value: IResolvable | EcsExpressGatewayServiceScalingTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts"></a>

```typescript
public putTimeouts(value: EcsExpressGatewayServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

---

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetPrimaryContainer` <a name="resetPrimaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer"></a>

```typescript
public resetPrimaryContainer(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScalingTarget` <a name="resetScalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget"></a>

```typescript
public resetScalingTarget(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskRoleArn` <a name="resetTaskRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn"></a>

```typescript
public resetTaskRoleArn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForSteadyState` <a name="resetWaitForSteadyState" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetWaitForSteadyState"></a>

```typescript
public resetWaitForSteadyState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcsExpressGatewayService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

ecsExpressGatewayService.EcsExpressGatewayService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EcsExpressGatewayService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsExpressGatewayService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsExpressGatewayService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcsExpressGatewayService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.currentDeployment">currentDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.ingressPaths">ingressPaths</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList">EcsExpressGatewayServiceIngressPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList">EcsExpressGatewayServiceNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList">EcsExpressGatewayServicePrimaryContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget">scalingTarget</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList">EcsExpressGatewayServiceScalingTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceRevisionArn">serviceRevisionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference">EcsExpressGatewayServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput">infrastructureRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput">primaryContainerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput">scalingTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput">taskRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyStateInput">waitForSteadyStateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyState">waitForSteadyState</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currentDeployment`<sup>Required</sup> <a name="currentDeployment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.currentDeployment"></a>

```typescript
public readonly currentDeployment: string;
```

- *Type:* string

---

##### `ingressPaths`<sup>Required</sup> <a name="ingressPaths" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.ingressPaths"></a>

```typescript
public readonly ingressPaths: EcsExpressGatewayServiceIngressPathsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList">EcsExpressGatewayServiceIngressPathsList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: EcsExpressGatewayServiceNetworkConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList">EcsExpressGatewayServiceNetworkConfigurationList</a>

---

##### `primaryContainer`<sup>Required</sup> <a name="primaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer"></a>

```typescript
public readonly primaryContainer: EcsExpressGatewayServicePrimaryContainerList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList">EcsExpressGatewayServicePrimaryContainerList</a>

---

##### `scalingTarget`<sup>Required</sup> <a name="scalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget"></a>

```typescript
public readonly scalingTarget: EcsExpressGatewayServiceScalingTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList">EcsExpressGatewayServiceScalingTargetList</a>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

##### `serviceRevisionArn`<sup>Required</sup> <a name="serviceRevisionArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceRevisionArn"></a>

```typescript
public readonly serviceRevisionArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeouts"></a>

```typescript
public readonly timeouts: EcsExpressGatewayServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference">EcsExpressGatewayServiceTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `infrastructureRoleArnInput`<sup>Optional</sup> <a name="infrastructureRoleArnInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput"></a>

```typescript
public readonly infrastructureRoleArnInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | EcsExpressGatewayServiceNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>[]

---

##### `primaryContainerInput`<sup>Optional</sup> <a name="primaryContainerInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput"></a>

```typescript
public readonly primaryContainerInput: IResolvable | EcsExpressGatewayServicePrimaryContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scalingTargetInput`<sup>Optional</sup> <a name="scalingTargetInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput"></a>

```typescript
public readonly scalingTargetInput: IResolvable | EcsExpressGatewayServiceScalingTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>[]

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskRoleArnInput`<sup>Optional</sup> <a name="taskRoleArnInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput"></a>

```typescript
public readonly taskRoleArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EcsExpressGatewayServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

---

##### `waitForSteadyStateInput`<sup>Optional</sup> <a name="waitForSteadyStateInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyStateInput"></a>

```typescript
public readonly waitForSteadyStateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn"></a>

```typescript
public readonly infrastructureRoleArn: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

---

##### `waitForSteadyState`<sup>Required</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyState"></a>

```typescript
public readonly waitForSteadyState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsExpressGatewayServiceConfig <a name="EcsExpressGatewayServiceConfig" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServiceConfig: ecsExpressGatewayService.EcsExpressGatewayServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster">cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu">cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration">networkConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer">primaryContainer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>[]</code> | primary_container block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget">scalingTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.waitForSteadyState">waitForSteadyState</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}.

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn"></a>

```typescript
public readonly infrastructureRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: IResolvable | EcsExpressGatewayServiceNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}.

---

##### `primaryContainer`<sup>Optional</sup> <a name="primaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer"></a>

```typescript
public readonly primaryContainer: IResolvable | EcsExpressGatewayServicePrimaryContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>[]

primary_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#region EcsExpressGatewayService#region}

---

##### `scalingTarget`<sup>Optional</sup> <a name="scalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget"></a>

```typescript
public readonly scalingTarget: IResolvable | EcsExpressGatewayServiceScalingTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EcsExpressGatewayServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#timeouts EcsExpressGatewayService#timeouts}

---

##### `waitForSteadyState`<sup>Optional</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.waitForSteadyState"></a>

```typescript
public readonly waitForSteadyState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}.

---

### EcsExpressGatewayServiceIngressPaths <a name="EcsExpressGatewayServiceIngressPaths" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServiceIngressPaths: ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths = { ... }
```


### EcsExpressGatewayServiceNetworkConfiguration <a name="EcsExpressGatewayServiceNetworkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServiceNetworkConfiguration: ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}.

---

### EcsExpressGatewayServicePrimaryContainer <a name="EcsExpressGatewayServicePrimaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServicePrimaryContainer: ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration">awsLogsConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort">containerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment">environment</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]</code> | environment block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials">repositoryCredentials</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>[]</code> | repository_credentials block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secret">secret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>[]</code> | secret block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}.

---

##### `awsLogsConfiguration`<sup>Optional</sup> <a name="awsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration"></a>

```typescript
public readonly awsLogsConfiguration: IResolvable | EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment"></a>

```typescript
public readonly environment: IResolvable | EcsExpressGatewayServicePrimaryContainerEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}

---

##### `repositoryCredentials`<sup>Optional</sup> <a name="repositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials"></a>

```typescript
public readonly repositoryCredentials: IResolvable | EcsExpressGatewayServicePrimaryContainerRepositoryCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>[]

repository_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secret"></a>

```typescript
public readonly secret: IResolvable | EcsExpressGatewayServicePrimaryContainerSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#secret EcsExpressGatewayService#secret}

---

### EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServicePrimaryContainerAwsLogsConfiguration: ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix">logStreamPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}.

---

##### `logStreamPrefix`<sup>Optional</sup> <a name="logStreamPrefix" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix"></a>

```typescript
public readonly logStreamPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}.

---

### EcsExpressGatewayServicePrimaryContainerEnvironment <a name="EcsExpressGatewayServicePrimaryContainerEnvironment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServicePrimaryContainerEnvironment: ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}.

---

### EcsExpressGatewayServicePrimaryContainerRepositoryCredentials <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServicePrimaryContainerRepositoryCredentials: ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}. |

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}.

---

### EcsExpressGatewayServicePrimaryContainerSecret <a name="EcsExpressGatewayServicePrimaryContainerSecret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServicePrimaryContainerSecret: ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}.

---

### EcsExpressGatewayServiceScalingTarget <a name="EcsExpressGatewayServiceScalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServiceScalingTarget: ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric">autoScalingMetric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue">autoScalingTargetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount">maxTaskCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount">minTaskCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}. |

---

##### `autoScalingMetric`<sup>Optional</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric"></a>

```typescript
public readonly autoScalingMetric: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}.

---

##### `autoScalingTargetValue`<sup>Optional</sup> <a name="autoScalingTargetValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue"></a>

```typescript
public readonly autoScalingTargetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}.

---

##### `maxTaskCount`<sup>Optional</sup> <a name="maxTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount"></a>

```typescript
public readonly maxTaskCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}.

---

##### `minTaskCount`<sup>Optional</sup> <a name="minTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount"></a>

```typescript
public readonly minTaskCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}.

---

### EcsExpressGatewayServiceTimeouts <a name="EcsExpressGatewayServiceTimeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

const ecsExpressGatewayServiceTimeouts: ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#create EcsExpressGatewayService#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#delete EcsExpressGatewayService#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/ecs_express_gateway_service#update EcsExpressGatewayService#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EcsExpressGatewayServiceIngressPathsList <a name="EcsExpressGatewayServiceIngressPathsList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServiceIngressPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EcsExpressGatewayServiceIngressPathsOutputReference <a name="EcsExpressGatewayServiceIngressPathsOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths">EcsExpressGatewayServiceIngressPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsExpressGatewayServiceIngressPaths;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths">EcsExpressGatewayServiceIngressPaths</a>

---


### EcsExpressGatewayServiceNetworkConfigurationList <a name="EcsExpressGatewayServiceNetworkConfigurationList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServiceNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServiceNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>[]

---


### EcsExpressGatewayServiceNetworkConfigurationOutputReference <a name="EcsExpressGatewayServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServiceNetworkConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>[]

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix">resetLogStreamPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetLogStreamPrefix` <a name="resetLogStreamPrefix" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix"></a>

```typescript
public resetLogStreamPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput">logStreamPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">logStreamPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logStreamPrefixInput`<sup>Optional</sup> <a name="logStreamPrefixInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput"></a>

```typescript
public readonly logStreamPrefixInput: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `logStreamPrefix`<sup>Required</sup> <a name="logStreamPrefix" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```typescript
public readonly logStreamPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentList <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerEnvironment;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>

---


### EcsExpressGatewayServicePrimaryContainerList <a name="EcsExpressGatewayServicePrimaryContainerList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServicePrimaryContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>[]

---


### EcsExpressGatewayServicePrimaryContainerOutputReference <a name="EcsExpressGatewayServicePrimaryContainerOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration">putAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials">putRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration">resetAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials">resetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsLogsConfiguration` <a name="putAwsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration"></a>

```typescript
public putAwsLogsConfiguration(value: IResolvable | EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>[]

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: IResolvable | EcsExpressGatewayServicePrimaryContainerEnvironment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

---

##### `putRepositoryCredentials` <a name="putRepositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials"></a>

```typescript
public putRepositoryCredentials(value: IResolvable | EcsExpressGatewayServicePrimaryContainerRepositoryCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>[]

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret"></a>

```typescript
public putSecret(value: IResolvable | EcsExpressGatewayServicePrimaryContainerSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>[]

---

##### `resetAwsLogsConfiguration` <a name="resetAwsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration"></a>

```typescript
public resetAwsLogsConfiguration(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetRepositoryCredentials` <a name="resetRepositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials"></a>

```typescript
public resetRepositoryCredentials(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration">awsLogsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList">EcsExpressGatewayServicePrimaryContainerSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput">awsLogsConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput">repositoryCredentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretInput">secretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsLogsConfiguration`<sup>Required</sup> <a name="awsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```typescript
public readonly awsLogsConfiguration: EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment"></a>

```typescript
public readonly environment: EcsExpressGatewayServicePrimaryContainerEnvironmentList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a>

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials"></a>

```typescript
public readonly repositoryCredentials: EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secret"></a>

```typescript
public readonly secret: EcsExpressGatewayServicePrimaryContainerSecretList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList">EcsExpressGatewayServicePrimaryContainerSecretList</a>

---

##### `awsLogsConfigurationInput`<sup>Optional</sup> <a name="awsLogsConfigurationInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput"></a>

```typescript
public readonly awsLogsConfigurationInput: IResolvable | EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: IResolvable | EcsExpressGatewayServicePrimaryContainerEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `repositoryCredentialsInput`<sup>Optional</sup> <a name="repositoryCredentialsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput"></a>

```typescript
public readonly repositoryCredentialsInput: IResolvable | EcsExpressGatewayServicePrimaryContainerRepositoryCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | EcsExpressGatewayServicePrimaryContainerSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerRepositoryCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>[]

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput">credentialsParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialsParameterInput`<sup>Optional</sup> <a name="credentialsParameterInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```typescript
public readonly credentialsParameterInput: string;
```

- *Type:* string

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerRepositoryCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---


### EcsExpressGatewayServicePrimaryContainerSecretList <a name="EcsExpressGatewayServicePrimaryContainerSecretList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServicePrimaryContainerSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>[]

---


### EcsExpressGatewayServicePrimaryContainerSecretOutputReference <a name="EcsExpressGatewayServicePrimaryContainerSecretOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServicePrimaryContainerSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>

---


### EcsExpressGatewayServiceScalingTargetList <a name="EcsExpressGatewayServiceScalingTargetList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get"></a>

```typescript
public get(index: number): EcsExpressGatewayServiceScalingTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServiceScalingTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>[]

---


### EcsExpressGatewayServiceScalingTargetOutputReference <a name="EcsExpressGatewayServiceScalingTargetOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric">resetAutoScalingMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue">resetAutoScalingTargetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount">resetMaxTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount">resetMinTaskCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoScalingMetric` <a name="resetAutoScalingMetric" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric"></a>

```typescript
public resetAutoScalingMetric(): void
```

##### `resetAutoScalingTargetValue` <a name="resetAutoScalingTargetValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue"></a>

```typescript
public resetAutoScalingTargetValue(): void
```

##### `resetMaxTaskCount` <a name="resetMaxTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount"></a>

```typescript
public resetMaxTaskCount(): void
```

##### `resetMinTaskCount` <a name="resetMinTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount"></a>

```typescript
public resetMinTaskCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput">autoScalingMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput">autoScalingTargetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput">maxTaskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput">minTaskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric">autoScalingMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue">autoScalingTargetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount">maxTaskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount">minTaskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingMetricInput`<sup>Optional</sup> <a name="autoScalingMetricInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput"></a>

```typescript
public readonly autoScalingMetricInput: string;
```

- *Type:* string

---

##### `autoScalingTargetValueInput`<sup>Optional</sup> <a name="autoScalingTargetValueInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput"></a>

```typescript
public readonly autoScalingTargetValueInput: number;
```

- *Type:* number

---

##### `maxTaskCountInput`<sup>Optional</sup> <a name="maxTaskCountInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput"></a>

```typescript
public readonly maxTaskCountInput: number;
```

- *Type:* number

---

##### `minTaskCountInput`<sup>Optional</sup> <a name="minTaskCountInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput"></a>

```typescript
public readonly minTaskCountInput: number;
```

- *Type:* number

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric"></a>

```typescript
public readonly autoScalingMetric: string;
```

- *Type:* string

---

##### `autoScalingTargetValue`<sup>Required</sup> <a name="autoScalingTargetValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```typescript
public readonly autoScalingTargetValue: number;
```

- *Type:* number

---

##### `maxTaskCount`<sup>Required</sup> <a name="maxTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount"></a>

```typescript
public readonly maxTaskCount: number;
```

- *Type:* number

---

##### `minTaskCount`<sup>Required</sup> <a name="minTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount"></a>

```typescript
public readonly minTaskCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServiceScalingTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---


### EcsExpressGatewayServiceTimeoutsOutputReference <a name="EcsExpressGatewayServiceTimeoutsOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { ecsExpressGatewayService } from '@cdktf/provider-aws'

new ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsExpressGatewayServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

---



