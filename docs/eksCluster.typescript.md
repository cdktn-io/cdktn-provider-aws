# `eksCluster` Submodule <a name="`eksCluster` Submodule" id="@cdktn/provider-aws.eksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCluster <a name="EksCluster" id="@cdktn/provider-aws.eksCluster.EksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster aws_eks_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksCluster.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksCluster(scope: Construct, id: string, config: EksClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig">EksClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.eksCluster.EksCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCluster.EksCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.eksCluster.EksCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig">EksClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putComputeConfig">putComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putControlPlaneScalingConfig">putControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putKubeApiServerConfig">putKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putKubeControllerManagerConfig">putKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig">putKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putKubeSchedulerConfig">putKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putOutpostConfig">putOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig">putRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.putZonalShiftConfig">putZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetBootstrapSelfManagedAddons">resetBootstrapSelfManagedAddons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetComputeConfig">resetComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetControlPlaneScalingConfig">resetControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetEnabledClusterLogTypes">resetEnabledClusterLogTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetForceUpdateVersion">resetForceUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetKubeApiServerConfig">resetKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetKubeControllerManagerConfig">resetKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetKubernetesNetworkConfig">resetKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetKubeSchedulerConfig">resetKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetOutpostConfig">resetOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetRemoteNetworkConfig">resetRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetStorageConfig">resetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.resetZonalShiftConfig">resetZonalShiftConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.eksCluster.EksCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.eksCluster.EksCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.eksCluster.EksCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.eksCluster.EksCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.eksCluster.EksCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.eksCluster.EksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.eksCluster.EksCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.eksCluster.EksCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.eksCluster.EksCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.eksCluster.EksCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.eksCluster.EksCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.eksCluster.EksCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.eksCluster.EksCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.eksCluster.EksCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCluster.EksCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCluster.EksCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.eksCluster.EksCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCluster.EksCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.eksCluster.EksCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.eksCluster.EksCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.eksCluster.EksCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.eksCluster.EksCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCluster.EksCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putAccessConfig"></a>

```typescript
public putAccessConfig(value: EksClusterAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `putComputeConfig` <a name="putComputeConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putComputeConfig"></a>

```typescript
public putComputeConfig(value: EksClusterComputeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `putControlPlaneScalingConfig` <a name="putControlPlaneScalingConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putControlPlaneScalingConfig"></a>

```typescript
public putControlPlaneScalingConfig(value: EksClusterControlPlaneScalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putControlPlaneScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: EksClusterEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---

##### `putKubeApiServerConfig` <a name="putKubeApiServerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubeApiServerConfig"></a>

```typescript
public putKubeApiServerConfig(value: EksClusterKubeApiServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubeApiServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---

##### `putKubeControllerManagerConfig` <a name="putKubeControllerManagerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubeControllerManagerConfig"></a>

```typescript
public putKubeControllerManagerConfig(value: EksClusterKubeControllerManagerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubeControllerManagerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---

##### `putKubernetesNetworkConfig` <a name="putKubernetesNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig"></a>

```typescript
public putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `putKubeSchedulerConfig` <a name="putKubeSchedulerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubeSchedulerConfig"></a>

```typescript
public putKubeSchedulerConfig(value: EksClusterKubeSchedulerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putKubeSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---

##### `putOutpostConfig` <a name="putOutpostConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putOutpostConfig"></a>

```typescript
public putOutpostConfig(value: EksClusterOutpostConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putOutpostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `putRemoteNetworkConfig` <a name="putRemoteNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig"></a>

```typescript
public putRemoteNetworkConfig(value: EksClusterRemoteNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putStorageConfig"></a>

```typescript
public putStorageConfig(value: EksClusterStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.eksCluster.EksCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: EksClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktn/provider-aws.eksCluster.EksCluster.putUpgradePolicy"></a>

```typescript
public putUpgradePolicy(value: EksClusterUpgradePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putVpcConfig"></a>

```typescript
public putVpcConfig(value: EksClusterVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---

##### `putZonalShiftConfig` <a name="putZonalShiftConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.putZonalShiftConfig"></a>

```typescript
public putZonalShiftConfig(value: EksClusterZonalShiftConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksCluster.putZonalShiftConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetAccessConfig"></a>

```typescript
public resetAccessConfig(): void
```

##### `resetBootstrapSelfManagedAddons` <a name="resetBootstrapSelfManagedAddons" id="@cdktn/provider-aws.eksCluster.EksCluster.resetBootstrapSelfManagedAddons"></a>

```typescript
public resetBootstrapSelfManagedAddons(): void
```

##### `resetComputeConfig` <a name="resetComputeConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetComputeConfig"></a>

```typescript
public resetComputeConfig(): void
```

##### `resetControlPlaneScalingConfig` <a name="resetControlPlaneScalingConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetControlPlaneScalingConfig"></a>

```typescript
public resetControlPlaneScalingConfig(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-aws.eksCluster.EksCluster.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEnabledClusterLogTypes` <a name="resetEnabledClusterLogTypes" id="@cdktn/provider-aws.eksCluster.EksCluster.resetEnabledClusterLogTypes"></a>

```typescript
public resetEnabledClusterLogTypes(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetForceUpdateVersion` <a name="resetForceUpdateVersion" id="@cdktn/provider-aws.eksCluster.EksCluster.resetForceUpdateVersion"></a>

```typescript
public resetForceUpdateVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.eksCluster.EksCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubeApiServerConfig` <a name="resetKubeApiServerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetKubeApiServerConfig"></a>

```typescript
public resetKubeApiServerConfig(): void
```

##### `resetKubeControllerManagerConfig` <a name="resetKubeControllerManagerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetKubeControllerManagerConfig"></a>

```typescript
public resetKubeControllerManagerConfig(): void
```

##### `resetKubernetesNetworkConfig` <a name="resetKubernetesNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetKubernetesNetworkConfig"></a>

```typescript
public resetKubernetesNetworkConfig(): void
```

##### `resetKubeSchedulerConfig` <a name="resetKubeSchedulerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetKubeSchedulerConfig"></a>

```typescript
public resetKubeSchedulerConfig(): void
```

##### `resetOutpostConfig` <a name="resetOutpostConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetOutpostConfig"></a>

```typescript
public resetOutpostConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.eksCluster.EksCluster.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRemoteNetworkConfig` <a name="resetRemoteNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetRemoteNetworkConfig"></a>

```typescript
public resetRemoteNetworkConfig(): void
```

##### `resetStorageConfig` <a name="resetStorageConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetStorageConfig"></a>

```typescript
public resetStorageConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.eksCluster.EksCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.eksCluster.EksCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.eksCluster.EksCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktn/provider-aws.eksCluster.EksCluster.resetUpgradePolicy"></a>

```typescript
public resetUpgradePolicy(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-aws.eksCluster.EksCluster.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetZonalShiftConfig` <a name="resetZonalShiftConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.resetZonalShiftConfig"></a>

```typescript
public resetZonalShiftConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EksCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.eksCluster.EksCluster.isConstruct"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

eksCluster.EksCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.eksCluster.EksCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.eksCluster.EksCluster.isTerraformElement"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

eksCluster.EksCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.eksCluster.EksCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.eksCluster.EksCluster.isTerraformResource"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

eksCluster.EksCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.eksCluster.EksCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.eksCluster.EksCluster.generateConfigForImport"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

eksCluster.EksCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EksCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList">EksClusterCertificateAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.controlPlaneScalingConfig">controlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference">EksClusterControlPlaneScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference">EksClusterEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList">EksClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubeApiServerConfig">kubeApiServerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference">EksClusterKubeApiServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubeControllerManagerConfig">kubeControllerManagerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference">EksClusterKubeControllerManagerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubeSchedulerConfig">kubeSchedulerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference">EksClusterKubeSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.outpostConfig">outpostConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfig">remoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference">EksClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference">EksClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.zonalShiftConfig">zonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput">bootstrapSelfManagedAddonsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.computeConfigInput">computeConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.controlPlaneScalingConfigInput">controlPlaneScalingConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypesInput">enabledClusterLogTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.forceUpdateVersionInput">forceUpdateVersionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubeApiServerConfigInput">kubeApiServerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubeControllerManagerConfigInput">kubeControllerManagerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfigInput">kubernetesNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.kubeSchedulerConfigInput">kubeSchedulerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.outpostConfigInput">outpostConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfigInput">remoteNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.zonalShiftConfigInput">zonalShiftConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypes">enabledClusterLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.forceUpdateVersion">forceUpdateVersion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.eksCluster.EksCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.eksCluster.EksCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.eksCluster.EksCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.eksCluster.EksCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.eksCluster.EksCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.eksCluster.EksCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.eksCluster.EksCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.eksCluster.EksCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.eksCluster.EksCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.eksCluster.EksCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.eksCluster.EksCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCluster.EksCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.eksCluster.EksCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.accessConfig"></a>

```typescript
public readonly accessConfig: EksClusterAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.eksCluster.EksCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktn/provider-aws.eksCluster.EksCluster.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: EksClusterCertificateAuthorityList;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList">EksClusterCertificateAuthorityList</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-aws.eksCluster.EksCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `computeConfig`<sup>Required</sup> <a name="computeConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.computeConfig"></a>

```typescript
public readonly computeConfig: EksClusterComputeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a>

---

##### `controlPlaneScalingConfig`<sup>Required</sup> <a name="controlPlaneScalingConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.controlPlaneScalingConfig"></a>

```typescript
public readonly controlPlaneScalingConfig: EksClusterControlPlaneScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference">EksClusterControlPlaneScalingConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.eksCluster.EksCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: EksClusterEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference">EksClusterEncryptionConfigOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.eksCluster.EksCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.eksCluster.EksCluster.property.identity"></a>

```typescript
public readonly identity: EksClusterIdentityList;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList">EksClusterIdentityList</a>

---

##### `kubeApiServerConfig`<sup>Required</sup> <a name="kubeApiServerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubeApiServerConfig"></a>

```typescript
public readonly kubeApiServerConfig: EksClusterKubeApiServerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference">EksClusterKubeApiServerConfigOutputReference</a>

---

##### `kubeControllerManagerConfig`<sup>Required</sup> <a name="kubeControllerManagerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubeControllerManagerConfig"></a>

```typescript
public readonly kubeControllerManagerConfig: EksClusterKubeControllerManagerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference">EksClusterKubeControllerManagerConfigOutputReference</a>

---

##### `kubernetesNetworkConfig`<sup>Required</sup> <a name="kubernetesNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfig"></a>

```typescript
public readonly kubernetesNetworkConfig: EksClusterKubernetesNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a>

---

##### `kubeSchedulerConfig`<sup>Required</sup> <a name="kubeSchedulerConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubeSchedulerConfig"></a>

```typescript
public readonly kubeSchedulerConfig: EksClusterKubeSchedulerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference">EksClusterKubeSchedulerConfigOutputReference</a>

---

##### `outpostConfig`<sup>Required</sup> <a name="outpostConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.outpostConfig"></a>

```typescript
public readonly outpostConfig: EksClusterOutpostConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a>

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktn/provider-aws.eksCluster.EksCluster.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `remoteNetworkConfig`<sup>Required</sup> <a name="remoteNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfig"></a>

```typescript
public readonly remoteNetworkConfig: EksClusterRemoteNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.eksCluster.EksCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.storageConfig"></a>

```typescript
public readonly storageConfig: EksClusterStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.eksCluster.EksCluster.property.timeouts"></a>

```typescript
public readonly timeouts: EksClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference">EksClusterTimeoutsOutputReference</a>

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktn/provider-aws.eksCluster.EksCluster.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: EksClusterUpgradePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: EksClusterVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference">EksClusterVpcConfigOutputReference</a>

---

##### `zonalShiftConfig`<sup>Required</sup> <a name="zonalShiftConfig" id="@cdktn/provider-aws.eksCluster.EksCluster.property.zonalShiftConfig"></a>

```typescript
public readonly zonalShiftConfig: EksClusterZonalShiftConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a>

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: EksClusterAccessConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `bootstrapSelfManagedAddonsInput`<sup>Optional</sup> <a name="bootstrapSelfManagedAddonsInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput"></a>

```typescript
public readonly bootstrapSelfManagedAddonsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `computeConfigInput`<sup>Optional</sup> <a name="computeConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.computeConfigInput"></a>

```typescript
public readonly computeConfigInput: EksClusterComputeConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `controlPlaneScalingConfigInput`<sup>Optional</sup> <a name="controlPlaneScalingConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.controlPlaneScalingConfigInput"></a>

```typescript
public readonly controlPlaneScalingConfigInput: EksClusterControlPlaneScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabledClusterLogTypesInput`<sup>Optional</sup> <a name="enabledClusterLogTypesInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypesInput"></a>

```typescript
public readonly enabledClusterLogTypesInput: string[];
```

- *Type:* string[]

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: EksClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---

##### `forceUpdateVersionInput`<sup>Optional</sup> <a name="forceUpdateVersionInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.forceUpdateVersionInput"></a>

```typescript
public readonly forceUpdateVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubeApiServerConfigInput`<sup>Optional</sup> <a name="kubeApiServerConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubeApiServerConfigInput"></a>

```typescript
public readonly kubeApiServerConfigInput: EksClusterKubeApiServerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---

##### `kubeControllerManagerConfigInput`<sup>Optional</sup> <a name="kubeControllerManagerConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubeControllerManagerConfigInput"></a>

```typescript
public readonly kubeControllerManagerConfigInput: EksClusterKubeControllerManagerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---

##### `kubernetesNetworkConfigInput`<sup>Optional</sup> <a name="kubernetesNetworkConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfigInput"></a>

```typescript
public readonly kubernetesNetworkConfigInput: EksClusterKubernetesNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `kubeSchedulerConfigInput`<sup>Optional</sup> <a name="kubeSchedulerConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.kubeSchedulerConfigInput"></a>

```typescript
public readonly kubeSchedulerConfigInput: EksClusterKubeSchedulerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outpostConfigInput`<sup>Optional</sup> <a name="outpostConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.outpostConfigInput"></a>

```typescript
public readonly outpostConfigInput: EksClusterOutpostConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteNetworkConfigInput`<sup>Optional</sup> <a name="remoteNetworkConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfigInput"></a>

```typescript
public readonly remoteNetworkConfigInput: EksClusterRemoteNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.storageConfigInput"></a>

```typescript
public readonly storageConfigInput: EksClusterStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EksClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.upgradePolicyInput"></a>

```typescript
public readonly upgradePolicyInput: EksClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: EksClusterVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---

##### `zonalShiftConfigInput`<sup>Optional</sup> <a name="zonalShiftConfigInput" id="@cdktn/provider-aws.eksCluster.EksCluster.property.zonalShiftConfigInput"></a>

```typescript
public readonly zonalShiftConfigInput: EksClusterZonalShiftConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `bootstrapSelfManagedAddons`<sup>Required</sup> <a name="bootstrapSelfManagedAddons" id="@cdktn/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddons"></a>

```typescript
public readonly bootstrapSelfManagedAddons: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-aws.eksCluster.EksCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabledClusterLogTypes`<sup>Required</sup> <a name="enabledClusterLogTypes" id="@cdktn/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypes"></a>

```typescript
public readonly enabledClusterLogTypes: string[];
```

- *Type:* string[]

---

##### `forceUpdateVersion`<sup>Required</sup> <a name="forceUpdateVersion" id="@cdktn/provider-aws.eksCluster.EksCluster.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.eksCluster.EksCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.eksCluster.EksCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.eksCluster.EksCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.eksCluster.EksCluster.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.eksCluster.EksCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.eksCluster.EksCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.eksCluster.EksCluster.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.eksCluster.EksCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksClusterAccessConfig <a name="EksClusterAccessConfig" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterAccessConfig: eksCluster.EksClusterAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions">bootstrapClusterCreatorAdminPermissions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}. |

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}.

---

##### `bootstrapClusterCreatorAdminPermissions`<sup>Optional</sup> <a name="bootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions"></a>

```typescript
public readonly bootstrapClusterCreatorAdminPermissions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}.

---

### EksClusterCertificateAuthority <a name="EksClusterCertificateAuthority" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthority.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterCertificateAuthority: eksCluster.EksClusterCertificateAuthority = { ... }
```


### EksClusterComputeConfig <a name="EksClusterComputeConfig" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterComputeConfig: eksCluster.EksClusterComputeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig.property.nodePools">nodePools</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig.property.nodeRoleArn">nodeRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

##### `nodePools`<sup>Optional</sup> <a name="nodePools" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfig.property.nodePools"></a>

```typescript
public readonly nodePools: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}.

---

##### `nodeRoleArn`<sup>Optional</sup> <a name="nodeRoleArn" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfig.property.nodeRoleArn"></a>

```typescript
public readonly nodeRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}.

---

### EksClusterConfig <a name="EksClusterConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterConfig: eksCluster.EksClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#name EksCluster#name}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | vpc_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.computeConfig">computeConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.controlPlaneScalingConfig">controlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | control_plane_scaling_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#deletion_protection EksCluster#deletion_protection}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.enabledClusterLogTypes">enabledClusterLogTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.forceUpdateVersion">forceUpdateVersion</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#force_update_version EksCluster#force_update_version}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#id EksCluster#id}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubeApiServerConfig">kubeApiServerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | kube_api_server_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubeControllerManagerConfig">kubeControllerManagerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | kube_controller_manager_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | kubernetes_network_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubeSchedulerConfig">kubeSchedulerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | kube_scheduler_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.outpostConfig">outpostConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | outpost_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.remoteNetworkConfig">remoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | remote_network_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#tags EksCluster#tags}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#version EksCluster#version}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterConfig.property.zonalShiftConfig">zonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | zonal_shift_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#name EksCluster#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}.

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: EksClusterVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#vpc_config EksCluster#vpc_config}

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.accessConfig"></a>

```typescript
public readonly accessConfig: EksClusterAccessConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#access_config EksCluster#access_config}

---

##### `bootstrapSelfManagedAddons`<sup>Optional</sup> <a name="bootstrapSelfManagedAddons" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons"></a>

```typescript
public readonly bootstrapSelfManagedAddons: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}.

---

##### `computeConfig`<sup>Optional</sup> <a name="computeConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.computeConfig"></a>

```typescript
public readonly computeConfig: EksClusterComputeConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}

---

##### `controlPlaneScalingConfig`<sup>Optional</sup> <a name="controlPlaneScalingConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.controlPlaneScalingConfig"></a>

```typescript
public readonly controlPlaneScalingConfig: EksClusterControlPlaneScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

control_plane_scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#control_plane_scaling_config EksCluster#control_plane_scaling_config}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#deletion_protection EksCluster#deletion_protection}.

---

##### `enabledClusterLogTypes`<sup>Optional</sup> <a name="enabledClusterLogTypes" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.enabledClusterLogTypes"></a>

```typescript
public readonly enabledClusterLogTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}.

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: EksClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}

---

##### `forceUpdateVersion`<sup>Optional</sup> <a name="forceUpdateVersion" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#force_update_version EksCluster#force_update_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#id EksCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeApiServerConfig`<sup>Optional</sup> <a name="kubeApiServerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubeApiServerConfig"></a>

```typescript
public readonly kubeApiServerConfig: EksClusterKubeApiServerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

kube_api_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#kube_api_server_config EksCluster#kube_api_server_config}

---

##### `kubeControllerManagerConfig`<sup>Optional</sup> <a name="kubeControllerManagerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubeControllerManagerConfig"></a>

```typescript
public readonly kubeControllerManagerConfig: EksClusterKubeControllerManagerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

kube_controller_manager_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#kube_controller_manager_config EksCluster#kube_controller_manager_config}

---

##### `kubernetesNetworkConfig`<sup>Optional</sup> <a name="kubernetesNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig"></a>

```typescript
public readonly kubernetesNetworkConfig: EksClusterKubernetesNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

kubernetes_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}

---

##### `kubeSchedulerConfig`<sup>Optional</sup> <a name="kubeSchedulerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.kubeSchedulerConfig"></a>

```typescript
public readonly kubeSchedulerConfig: EksClusterKubeSchedulerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

kube_scheduler_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#kube_scheduler_config EksCluster#kube_scheduler_config}

---

##### `outpostConfig`<sup>Optional</sup> <a name="outpostConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.outpostConfig"></a>

```typescript
public readonly outpostConfig: EksClusterOutpostConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

outpost_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#region EksCluster#region}

---

##### `remoteNetworkConfig`<sup>Optional</sup> <a name="remoteNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.remoteNetworkConfig"></a>

```typescript
public readonly remoteNetworkConfig: EksClusterRemoteNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

remote_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.storageConfig"></a>

```typescript
public readonly storageConfig: EksClusterStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#tags EksCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksClusterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#timeouts EksCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: EksClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#version EksCluster#version}.

---

##### `zonalShiftConfig`<sup>Optional</sup> <a name="zonalShiftConfig" id="@cdktn/provider-aws.eksCluster.EksClusterConfig.property.zonalShiftConfig"></a>

```typescript
public readonly zonalShiftConfig: EksClusterZonalShiftConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

zonal_shift_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}

---

### EksClusterControlPlaneScalingConfig <a name="EksClusterControlPlaneScalingConfig" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterControlPlaneScalingConfig: eksCluster.EksClusterControlPlaneScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#tier EksCluster#tier}. |

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#tier EksCluster#tier}.

---

### EksClusterEncryptionConfig <a name="EksClusterEncryptionConfig" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterEncryptionConfig: eksCluster.EksClusterEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig.property.provider">provider</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | provider block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#resources EksCluster#resources}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig.property.provider"></a>

```typescript
public readonly provider: EksClusterEncryptionConfigProvider;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#provider EksCluster#provider}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#resources EksCluster#resources}.

---

### EksClusterEncryptionConfigProvider <a name="EksClusterEncryptionConfigProvider" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterEncryptionConfigProvider: eksCluster.EksClusterEncryptionConfigProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn">keyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}. |

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}.

---

### EksClusterIdentity <a name="EksClusterIdentity" id="@cdktn/provider-aws.eksCluster.EksClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterIdentity.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterIdentity: eksCluster.EksClusterIdentity = { ... }
```


### EksClusterIdentityOidc <a name="EksClusterIdentityOidc" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidc.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterIdentityOidc: eksCluster.EksClusterIdentityOidc = { ... }
```


### EksClusterKubeApiServerConfig <a name="EksClusterKubeApiServerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeApiServerConfig: eksCluster.EksClusterKubeApiServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig.property.eventTtl">eventTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#event_ttl EksCluster#event_ttl}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig.property.serviceNodePortRange">serviceNodePortRange</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | service_node_port_range block. |

---

##### `eventTtl`<sup>Optional</sup> <a name="eventTtl" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig.property.eventTtl"></a>

```typescript
public readonly eventTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#event_ttl EksCluster#event_ttl}.

---

##### `serviceNodePortRange`<sup>Optional</sup> <a name="serviceNodePortRange" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig.property.serviceNodePortRange"></a>

```typescript
public readonly serviceNodePortRange: EksClusterKubeApiServerConfigServiceNodePortRange;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

service_node_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#service_node_port_range EksCluster#service_node_port_range}

---

### EksClusterKubeApiServerConfigServiceNodePortRange <a name="EksClusterKubeApiServerConfigServiceNodePortRange" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeApiServerConfigServiceNodePortRange: eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.maxPort">maxPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#max_port EksCluster#max_port}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.minPort">minPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#min_port EksCluster#min_port}. |

---

##### `maxPort`<sup>Optional</sup> <a name="maxPort" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.maxPort"></a>

```typescript
public readonly maxPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#max_port EksCluster#max_port}.

---

##### `minPort`<sup>Optional</sup> <a name="minPort" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange.property.minPort"></a>

```typescript
public readonly minPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#min_port EksCluster#min_port}.

---

### EksClusterKubeControllerManagerConfig <a name="EksClusterKubeControllerManagerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeControllerManagerConfig: eksCluster.EksClusterKubeControllerManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig.property.horizontalPodAutoscalerControllerConfig">horizontalPodAutoscalerControllerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | horizontal_pod_autoscaler_controller_config block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig.property.podGcControllerConfig">podGcControllerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig">EksClusterKubeControllerManagerConfigPodGcControllerConfig</a></code> | pod_gc_controller_config block. |

---

##### `horizontalPodAutoscalerControllerConfig`<sup>Optional</sup> <a name="horizontalPodAutoscalerControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig.property.horizontalPodAutoscalerControllerConfig"></a>

```typescript
public readonly horizontalPodAutoscalerControllerConfig: EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

horizontal_pod_autoscaler_controller_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_controller_config EksCluster#horizontal_pod_autoscaler_controller_config}

---

##### `podGcControllerConfig`<sup>Optional</sup> <a name="podGcControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig.property.podGcControllerConfig"></a>

```typescript
public readonly podGcControllerConfig: EksClusterKubeControllerManagerConfigPodGcControllerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig">EksClusterKubeControllerManagerConfigPodGcControllerConfig</a>

pod_gc_controller_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#pod_gc_controller_config EksCluster#pod_gc_controller_config}

---

### EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig <a name="EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig: eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.property.horizontalPodAutoscalerSyncPeriod">horizontalPodAutoscalerSyncPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_sync_period EksCluster#horizontal_pod_autoscaler_sync_period}. |

---

##### `horizontalPodAutoscalerSyncPeriod`<sup>Optional</sup> <a name="horizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig.property.horizontalPodAutoscalerSyncPeriod"></a>

```typescript
public readonly horizontalPodAutoscalerSyncPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_sync_period EksCluster#horizontal_pod_autoscaler_sync_period}.

---

### EksClusterKubeControllerManagerConfigPodGcControllerConfig <a name="EksClusterKubeControllerManagerConfigPodGcControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeControllerManagerConfigPodGcControllerConfig: eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig.property.terminatedPodGcThreshold">terminatedPodGcThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#terminated_pod_gc_threshold EksCluster#terminated_pod_gc_threshold}. |

---

##### `terminatedPodGcThreshold`<sup>Optional</sup> <a name="terminatedPodGcThreshold" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig.property.terminatedPodGcThreshold"></a>

```typescript
public readonly terminatedPodGcThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#terminated_pod_gc_threshold EksCluster#terminated_pod_gc_threshold}.

---

### EksClusterKubernetesNetworkConfig <a name="EksClusterKubernetesNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubernetesNetworkConfig: eksCluster.EksClusterKubernetesNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing">elasticLoadBalancing</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | elastic_load_balancing block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily">ipFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr">serviceIpv4Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}. |

---

##### `elasticLoadBalancing`<sup>Optional</sup> <a name="elasticLoadBalancing" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing"></a>

```typescript
public readonly elasticLoadBalancing: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

elastic_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#elastic_load_balancing EksCluster#elastic_load_balancing}

---

##### `ipFamily`<sup>Optional</sup> <a name="ipFamily" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily"></a>

```typescript
public readonly ipFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}.

---

##### `serviceIpv4Cidr`<sup>Optional</sup> <a name="serviceIpv4Cidr" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

```typescript
public readonly serviceIpv4Cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}.

---

### EksClusterKubernetesNetworkConfigElasticLoadBalancing <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancing" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubernetesNetworkConfigElasticLoadBalancing: eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

### EksClusterKubeSchedulerConfig <a name="EksClusterKubeSchedulerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeSchedulerConfig: eksCluster.EksClusterKubeSchedulerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig.property.nodeResourcesFit">nodeResourcesFit</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | node_resources_fit block. |

---

##### `nodeResourcesFit`<sup>Optional</sup> <a name="nodeResourcesFit" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig.property.nodeResourcesFit"></a>

```typescript
public readonly nodeResourcesFit: EksClusterKubeSchedulerConfigNodeResourcesFit;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

node_resources_fit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#node_resources_fit EksCluster#node_resources_fit}

---

### EksClusterKubeSchedulerConfigNodeResourcesFit <a name="EksClusterKubeSchedulerConfigNodeResourcesFit" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeSchedulerConfigNodeResourcesFit: eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.property.scoringStrategy">scoringStrategy</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | scoring_strategy block. |

---

##### `scoringStrategy`<sup>Optional</sup> <a name="scoringStrategy" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit.property.scoringStrategy"></a>

```typescript
public readonly scoringStrategy: EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

scoring_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#scoring_strategy EksCluster#scoring_strategy}

---

### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy: eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.resource">resource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>[]</code> | resource block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#type EksCluster#type}. |

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.resource"></a>

```typescript
public readonly resource: IResolvable | EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>[]

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#resource EksCluster#resource}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#type EksCluster#type}.

---

### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource: eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#name EksCluster#name}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#weight EksCluster#weight}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#name EksCluster#name}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#weight EksCluster#weight}.

---

### EksClusterOutpostConfig <a name="EksClusterOutpostConfig" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterOutpostConfig: eksCluster.EksClusterOutpostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType">controlPlaneInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.outpostArns">outpostArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement">controlPlanePlacement</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | control_plane_placement block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.etcdInstanceType">etcdInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#etcd_instance_type EksCluster#etcd_instance_type}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.etcdPlacement">etcdPlacement</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | etcd_placement block. |

---

##### `controlPlaneInstanceType`<sup>Required</sup> <a name="controlPlaneInstanceType" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType"></a>

```typescript
public readonly controlPlaneInstanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}.

---

##### `outpostArns`<sup>Required</sup> <a name="outpostArns" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.outpostArns"></a>

```typescript
public readonly outpostArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}.

---

##### `controlPlanePlacement`<sup>Optional</sup> <a name="controlPlanePlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement"></a>

```typescript
public readonly controlPlanePlacement: EksClusterOutpostConfigControlPlanePlacement;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

control_plane_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#control_plane_placement EksCluster#control_plane_placement}

---

##### `etcdInstanceType`<sup>Optional</sup> <a name="etcdInstanceType" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.etcdInstanceType"></a>

```typescript
public readonly etcdInstanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#etcd_instance_type EksCluster#etcd_instance_type}.

---

##### `etcdPlacement`<sup>Optional</sup> <a name="etcdPlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig.property.etcdPlacement"></a>

```typescript
public readonly etcdPlacement: EksClusterOutpostConfigEtcdPlacement;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

etcd_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#etcd_placement EksCluster#etcd_placement}

---

### EksClusterOutpostConfigControlPlanePlacement <a name="EksClusterOutpostConfigControlPlanePlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterOutpostConfigControlPlanePlacement: eksCluster.EksClusterOutpostConfigControlPlanePlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#group_name EksCluster#group_name}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.spreadLevel">spreadLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}. |

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#group_name EksCluster#group_name}.

---

##### `spreadLevel`<sup>Optional</sup> <a name="spreadLevel" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.spreadLevel"></a>

```typescript
public readonly spreadLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}.

---

### EksClusterOutpostConfigEtcdPlacement <a name="EksClusterOutpostConfigEtcdPlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterOutpostConfigEtcdPlacement: eksCluster.EksClusterOutpostConfigEtcdPlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement.property.spreadLevel">spreadLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}. |

---

##### `spreadLevel`<sup>Optional</sup> <a name="spreadLevel" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement.property.spreadLevel"></a>

```typescript
public readonly spreadLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}.

---

### EksClusterRemoteNetworkConfig <a name="EksClusterRemoteNetworkConfig" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterRemoteNetworkConfig: eksCluster.EksClusterRemoteNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks">remoteNodeNetworks</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | remote_node_networks block. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks">remotePodNetworks</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | remote_pod_networks block. |

---

##### `remoteNodeNetworks`<sup>Optional</sup> <a name="remoteNodeNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks"></a>

```typescript
public readonly remoteNodeNetworks: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

remote_node_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#remote_node_networks EksCluster#remote_node_networks}

---

##### `remotePodNetworks`<sup>Optional</sup> <a name="remotePodNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks"></a>

```typescript
public readonly remotePodNetworks: EksClusterRemoteNetworkConfigRemotePodNetworks;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

remote_pod_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#remote_pod_networks EksCluster#remote_pod_networks}

---

### EksClusterRemoteNetworkConfigRemoteNodeNetworks <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterRemoteNetworkConfigRemoteNodeNetworks: eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs">cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}.

---

### EksClusterRemoteNetworkConfigRemotePodNetworks <a name="EksClusterRemoteNetworkConfigRemotePodNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterRemoteNetworkConfigRemotePodNetworks: eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs">cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}.

---

### EksClusterStorageConfig <a name="EksClusterStorageConfig" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterStorageConfig: eksCluster.EksClusterStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig.property.blockStorage">blockStorage</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | block_storage block. |

---

##### `blockStorage`<sup>Optional</sup> <a name="blockStorage" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfig.property.blockStorage"></a>

```typescript
public readonly blockStorage: EksClusterStorageConfigBlockStorage;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

block_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#block_storage EksCluster#block_storage}

---

### EksClusterStorageConfigBlockStorage <a name="EksClusterStorageConfigBlockStorage" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterStorageConfigBlockStorage: eksCluster.EksClusterStorageConfigBlockStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

### EksClusterTimeouts <a name="EksClusterTimeouts" id="@cdktn/provider-aws.eksCluster.EksClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterTimeouts.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterTimeouts: eksCluster.EksClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#create EksCluster#create}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#delete EksCluster#delete}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#update EksCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.eksCluster.EksClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#create EksCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.eksCluster.EksClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#delete EksCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.eksCluster.EksClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#update EksCluster#update}.

---

### EksClusterUpgradePolicy <a name="EksClusterUpgradePolicy" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterUpgradePolicy: eksCluster.EksClusterUpgradePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy.property.supportType">supportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#support_type EksCluster#support_type}. |

---

##### `supportType`<sup>Optional</sup> <a name="supportType" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy.property.supportType"></a>

```typescript
public readonly supportType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#support_type EksCluster#support_type}.

---

### EksClusterVpcConfig <a name="EksClusterVpcConfig" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterVpcConfig: eksCluster.EksClusterVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.controlPlaneEgressMode">controlPlaneEgressMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#control_plane_egress_mode EksCluster#control_plane_egress_mode}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPrivateAccess">endpointPrivateAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPublicAccess">endpointPublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.publicAccessCidrs">publicAccessCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}.

---

##### `controlPlaneEgressMode`<sup>Optional</sup> <a name="controlPlaneEgressMode" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.controlPlaneEgressMode"></a>

```typescript
public readonly controlPlaneEgressMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#control_plane_egress_mode EksCluster#control_plane_egress_mode}.

---

##### `endpointPrivateAccess`<sup>Optional</sup> <a name="endpointPrivateAccess" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPrivateAccess"></a>

```typescript
public readonly endpointPrivateAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}.

---

##### `endpointPublicAccess`<sup>Optional</sup> <a name="endpointPublicAccess" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPublicAccess"></a>

```typescript
public readonly endpointPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}.

---

##### `publicAccessCidrs`<sup>Optional</sup> <a name="publicAccessCidrs" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.publicAccessCidrs"></a>

```typescript
public readonly publicAccessCidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}.

---

### EksClusterZonalShiftConfig <a name="EksClusterZonalShiftConfig" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

const eksClusterZonalShiftConfig: eksCluster.EksClusterZonalShiftConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksClusterAccessConfigOutputReference <a name="EksClusterAccessConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions">resetBootstrapClusterCreatorAdminPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetBootstrapClusterCreatorAdminPermissions` <a name="resetBootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions"></a>

```typescript
public resetBootstrapClusterCreatorAdminPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput">authenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput">bootstrapClusterCreatorAdminPermissionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions">bootstrapClusterCreatorAdminPermissions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: string;
```

- *Type:* string

---

##### `bootstrapClusterCreatorAdminPermissionsInput`<sup>Optional</sup> <a name="bootstrapClusterCreatorAdminPermissionsInput" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput"></a>

```typescript
public readonly bootstrapClusterCreatorAdminPermissionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `bootstrapClusterCreatorAdminPermissions`<sup>Required</sup> <a name="bootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions"></a>

```typescript
public readonly bootstrapClusterCreatorAdminPermissions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterAccessConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---


### EksClusterCertificateAuthorityList <a name="EksClusterCertificateAuthorityList" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterCertificateAuthorityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get"></a>

```typescript
public get(index: number): EksClusterCertificateAuthorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksClusterCertificateAuthorityOutputReference <a name="EksClusterCertificateAuthorityOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterCertificateAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthority">EksClusterCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterCertificateAuthority;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterCertificateAuthority">EksClusterCertificateAuthority</a>

---


### EksClusterComputeConfigOutputReference <a name="EksClusterComputeConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterComputeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools">resetNodePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn">resetNodeRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNodePools` <a name="resetNodePools" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools"></a>

```typescript
public resetNodePools(): void
```

##### `resetNodeRoleArn` <a name="resetNodeRoleArn" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn"></a>

```typescript
public resetNodeRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput">nodePoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput">nodeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools">nodePools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn">nodeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nodePoolsInput`<sup>Optional</sup> <a name="nodePoolsInput" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput"></a>

```typescript
public readonly nodePoolsInput: string[];
```

- *Type:* string[]

---

##### `nodeRoleArnInput`<sup>Optional</sup> <a name="nodeRoleArnInput" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput"></a>

```typescript
public readonly nodeRoleArnInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools"></a>

```typescript
public readonly nodePools: string[];
```

- *Type:* string[]

---

##### `nodeRoleArn`<sup>Required</sup> <a name="nodeRoleArn" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn"></a>

```typescript
public readonly nodeRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterComputeConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---


### EksClusterControlPlaneScalingConfigOutputReference <a name="EksClusterControlPlaneScalingConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterControlPlaneScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resetTier">resetTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTier` <a name="resetTier" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.resetTier"></a>

```typescript
public resetTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterControlPlaneScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterControlPlaneScalingConfig">EksClusterControlPlaneScalingConfig</a>

---


### EksClusterEncryptionConfigOutputReference <a name="EksClusterEncryptionConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider">putProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvider` <a name="putProvider" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider"></a>

```typescript
public putProvider(value: EksClusterEncryptionConfigProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput">providerInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider"></a>

```typescript
public readonly provider: EksClusterEncryptionConfigProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a>

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: EksClusterEncryptionConfigProvider;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---


### EksClusterEncryptionConfigProviderOutputReference <a name="EksClusterEncryptionConfigProviderOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterEncryptionConfigProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterEncryptionConfigProvider;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


### EksClusterIdentityList <a name="EksClusterIdentityList" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.get"></a>

```typescript
public get(index: number): EksClusterIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksClusterIdentityOidcList <a name="EksClusterIdentityOidcList" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterIdentityOidcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.get"></a>

```typescript
public get(index: number): EksClusterIdentityOidcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksClusterIdentityOidcOutputReference <a name="EksClusterIdentityOidcOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterIdentityOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidc">EksClusterIdentityOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterIdentityOidc;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidc">EksClusterIdentityOidc</a>

---


### EksClusterIdentityOutputReference <a name="EksClusterIdentityOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList">EksClusterIdentityOidcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentity">EksClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.oidc"></a>

```typescript
public readonly oidc: EksClusterIdentityOidcList;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentityOidcList">EksClusterIdentityOidcList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterIdentity">EksClusterIdentity</a>

---


### EksClusterKubeApiServerConfigOutputReference <a name="EksClusterKubeApiServerConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeApiServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange">putServiceNodePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetEventTtl">resetEventTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetServiceNodePortRange">resetServiceNodePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceNodePortRange` <a name="putServiceNodePortRange" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange"></a>

```typescript
public putServiceNodePortRange(value: EksClusterKubeApiServerConfigServiceNodePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.putServiceNodePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---

##### `resetEventTtl` <a name="resetEventTtl" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetEventTtl"></a>

```typescript
public resetEventTtl(): void
```

##### `resetServiceNodePortRange` <a name="resetServiceNodePortRange" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.resetServiceNodePortRange"></a>

```typescript
public resetServiceNodePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRange">serviceNodePortRange</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference">EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtlInput">eventTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRangeInput">serviceNodePortRangeInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtl">eventTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNodePortRange`<sup>Required</sup> <a name="serviceNodePortRange" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRange"></a>

```typescript
public readonly serviceNodePortRange: EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference">EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference</a>

---

##### `eventTtlInput`<sup>Optional</sup> <a name="eventTtlInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtlInput"></a>

```typescript
public readonly eventTtlInput: string;
```

- *Type:* string

---

##### `serviceNodePortRangeInput`<sup>Optional</sup> <a name="serviceNodePortRangeInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.serviceNodePortRangeInput"></a>

```typescript
public readonly serviceNodePortRangeInput: EksClusterKubeApiServerConfigServiceNodePortRange;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---

##### `eventTtl`<sup>Required</sup> <a name="eventTtl" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.eventTtl"></a>

```typescript
public readonly eventTtl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeApiServerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfig">EksClusterKubeApiServerConfig</a>

---


### EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference <a name="EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMaxPort">resetMaxPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMinPort">resetMinPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxPort` <a name="resetMaxPort" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMaxPort"></a>

```typescript
public resetMaxPort(): void
```

##### `resetMinPort` <a name="resetMinPort" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.resetMinPort"></a>

```typescript
public resetMinPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPortInput">maxPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPortInput">minPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPort">maxPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPort">minPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxPortInput`<sup>Optional</sup> <a name="maxPortInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPortInput"></a>

```typescript
public readonly maxPortInput: number;
```

- *Type:* number

---

##### `minPortInput`<sup>Optional</sup> <a name="minPortInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPortInput"></a>

```typescript
public readonly minPortInput: number;
```

- *Type:* number

---

##### `maxPort`<sup>Required</sup> <a name="maxPort" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.maxPort"></a>

```typescript
public readonly maxPort: number;
```

- *Type:* number

---

##### `minPort`<sup>Required</sup> <a name="minPort" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.minPort"></a>

```typescript
public readonly minPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeApiServerConfigServiceNodePortRange;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeApiServerConfigServiceNodePortRange">EksClusterKubeApiServerConfigServiceNodePortRange</a>

---


### EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference <a name="EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resetHorizontalPodAutoscalerSyncPeriod">resetHorizontalPodAutoscalerSyncPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHorizontalPodAutoscalerSyncPeriod` <a name="resetHorizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.resetHorizontalPodAutoscalerSyncPeriod"></a>

```typescript
public resetHorizontalPodAutoscalerSyncPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriodInput">horizontalPodAutoscalerSyncPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriod">horizontalPodAutoscalerSyncPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `horizontalPodAutoscalerSyncPeriodInput`<sup>Optional</sup> <a name="horizontalPodAutoscalerSyncPeriodInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriodInput"></a>

```typescript
public readonly horizontalPodAutoscalerSyncPeriodInput: string;
```

- *Type:* string

---

##### `horizontalPodAutoscalerSyncPeriod`<sup>Required</sup> <a name="horizontalPodAutoscalerSyncPeriod" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.horizontalPodAutoscalerSyncPeriod"></a>

```typescript
public readonly horizontalPodAutoscalerSyncPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---


### EksClusterKubeControllerManagerConfigOutputReference <a name="EksClusterKubeControllerManagerConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeControllerManagerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig">putHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putPodGcControllerConfig">putPodGcControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetHorizontalPodAutoscalerControllerConfig">resetHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetPodGcControllerConfig">resetPodGcControllerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHorizontalPodAutoscalerControllerConfig` <a name="putHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig"></a>

```typescript
public putHorizontalPodAutoscalerControllerConfig(value: EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putHorizontalPodAutoscalerControllerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---

##### `putPodGcControllerConfig` <a name="putPodGcControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putPodGcControllerConfig"></a>

```typescript
public putPodGcControllerConfig(value: EksClusterKubeControllerManagerConfigPodGcControllerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.putPodGcControllerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig">EksClusterKubeControllerManagerConfigPodGcControllerConfig</a>

---

##### `resetHorizontalPodAutoscalerControllerConfig` <a name="resetHorizontalPodAutoscalerControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetHorizontalPodAutoscalerControllerConfig"></a>

```typescript
public resetHorizontalPodAutoscalerControllerConfig(): void
```

##### `resetPodGcControllerConfig` <a name="resetPodGcControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.resetPodGcControllerConfig"></a>

```typescript
public resetPodGcControllerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfig">horizontalPodAutoscalerControllerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.podGcControllerConfig">podGcControllerConfig</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference">EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfigInput">horizontalPodAutoscalerControllerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.podGcControllerConfigInput">podGcControllerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig">EksClusterKubeControllerManagerConfigPodGcControllerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `horizontalPodAutoscalerControllerConfig`<sup>Required</sup> <a name="horizontalPodAutoscalerControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfig"></a>

```typescript
public readonly horizontalPodAutoscalerControllerConfig: EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference</a>

---

##### `podGcControllerConfig`<sup>Required</sup> <a name="podGcControllerConfig" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.podGcControllerConfig"></a>

```typescript
public readonly podGcControllerConfig: EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference">EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference</a>

---

##### `horizontalPodAutoscalerControllerConfigInput`<sup>Optional</sup> <a name="horizontalPodAutoscalerControllerConfigInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.horizontalPodAutoscalerControllerConfigInput"></a>

```typescript
public readonly horizontalPodAutoscalerControllerConfigInput: EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig">EksClusterKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig</a>

---

##### `podGcControllerConfigInput`<sup>Optional</sup> <a name="podGcControllerConfigInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.podGcControllerConfigInput"></a>

```typescript
public readonly podGcControllerConfigInput: EksClusterKubeControllerManagerConfigPodGcControllerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig">EksClusterKubeControllerManagerConfigPodGcControllerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeControllerManagerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfig">EksClusterKubeControllerManagerConfig</a>

---


### EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference <a name="EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.resetTerminatedPodGcThreshold">resetTerminatedPodGcThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTerminatedPodGcThreshold` <a name="resetTerminatedPodGcThreshold" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.resetTerminatedPodGcThreshold"></a>

```typescript
public resetTerminatedPodGcThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.terminatedPodGcThresholdInput">terminatedPodGcThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.terminatedPodGcThreshold">terminatedPodGcThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig">EksClusterKubeControllerManagerConfigPodGcControllerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `terminatedPodGcThresholdInput`<sup>Optional</sup> <a name="terminatedPodGcThresholdInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.terminatedPodGcThresholdInput"></a>

```typescript
public readonly terminatedPodGcThresholdInput: number;
```

- *Type:* number

---

##### `terminatedPodGcThreshold`<sup>Required</sup> <a name="terminatedPodGcThreshold" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.terminatedPodGcThreshold"></a>

```typescript
public readonly terminatedPodGcThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeControllerManagerConfigPodGcControllerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeControllerManagerConfigPodGcControllerConfig">EksClusterKubeControllerManagerConfigPodGcControllerConfig</a>

---


### EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---


### EksClusterKubernetesNetworkConfigOutputReference <a name="EksClusterKubernetesNetworkConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubernetesNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing">putElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing">resetElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily">resetIpFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr">resetServiceIpv4Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElasticLoadBalancing` <a name="putElasticLoadBalancing" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing"></a>

```typescript
public putElasticLoadBalancing(value: EksClusterKubernetesNetworkConfigElasticLoadBalancing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `resetElasticLoadBalancing` <a name="resetElasticLoadBalancing" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing"></a>

```typescript
public resetElasticLoadBalancing(): void
```

##### `resetIpFamily` <a name="resetIpFamily" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily"></a>

```typescript
public resetIpFamily(): void
```

##### `resetServiceIpv4Cidr` <a name="resetServiceIpv4Cidr" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr"></a>

```typescript
public resetServiceIpv4Cidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing">elasticLoadBalancing</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr">serviceIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput">elasticLoadBalancingInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput">ipFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput">serviceIpv4CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily">ipFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr">serviceIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elasticLoadBalancing`<sup>Required</sup> <a name="elasticLoadBalancing" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing"></a>

```typescript
public readonly elasticLoadBalancing: EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a>

---

##### `serviceIpv6Cidr`<sup>Required</sup> <a name="serviceIpv6Cidr" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr"></a>

```typescript
public readonly serviceIpv6Cidr: string;
```

- *Type:* string

---

##### `elasticLoadBalancingInput`<sup>Optional</sup> <a name="elasticLoadBalancingInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput"></a>

```typescript
public readonly elasticLoadBalancingInput: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `ipFamilyInput`<sup>Optional</sup> <a name="ipFamilyInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput"></a>

```typescript
public readonly ipFamilyInput: string;
```

- *Type:* string

---

##### `serviceIpv4CidrInput`<sup>Optional</sup> <a name="serviceIpv4CidrInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput"></a>

```typescript
public readonly serviceIpv4CidrInput: string;
```

- *Type:* string

---

##### `ipFamily`<sup>Required</sup> <a name="ipFamily" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily"></a>

```typescript
public readonly ipFamily: string;
```

- *Type:* string

---

##### `serviceIpv4Cidr`<sup>Required</sup> <a name="serviceIpv4Cidr" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr"></a>

```typescript
public readonly serviceIpv4Cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubernetesNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy">putScoringStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resetScoringStrategy">resetScoringStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScoringStrategy` <a name="putScoringStrategy" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy"></a>

```typescript
public putScoringStrategy(value: EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.putScoringStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---

##### `resetScoringStrategy` <a name="resetScoringStrategy" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.resetScoringStrategy"></a>

```typescript
public resetScoringStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategy">scoringStrategy</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategyInput">scoringStrategyInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scoringStrategy`<sup>Required</sup> <a name="scoringStrategy" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategy"></a>

```typescript
public readonly scoringStrategy: EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference</a>

---

##### `scoringStrategyInput`<sup>Optional</sup> <a name="scoringStrategyInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.scoringStrategyInput"></a>

```typescript
public readonly scoringStrategyInput: EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeSchedulerConfigNodeResourcesFit;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResource` <a name="putResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResource"></a>

```typescript
public putResource(value: IResolvable | EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.putResource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>[]

---

##### `resetResource` <a name="resetResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resourceInput">resourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resource"></a>

```typescript
public readonly resource: EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: IResolvable | EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategy</a>

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.get"></a>

```typescript
public get(index: number): EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>[]

---


### EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference <a name="EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource">EksClusterKubeSchedulerConfigNodeResourcesFitScoringStrategyResource</a>

---


### EksClusterKubeSchedulerConfigOutputReference <a name="EksClusterKubeSchedulerConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterKubeSchedulerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit">putNodeResourcesFit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resetNodeResourcesFit">resetNodeResourcesFit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeResourcesFit` <a name="putNodeResourcesFit" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit"></a>

```typescript
public putNodeResourcesFit(value: EksClusterKubeSchedulerConfigNodeResourcesFit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.putNodeResourcesFit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---

##### `resetNodeResourcesFit` <a name="resetNodeResourcesFit" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.resetNodeResourcesFit"></a>

```typescript
public resetNodeResourcesFit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFit">nodeResourcesFit</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFitInput">nodeResourcesFitInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeResourcesFit`<sup>Required</sup> <a name="nodeResourcesFit" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFit"></a>

```typescript
public readonly nodeResourcesFit: EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference">EksClusterKubeSchedulerConfigNodeResourcesFitOutputReference</a>

---

##### `nodeResourcesFitInput`<sup>Optional</sup> <a name="nodeResourcesFitInput" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.nodeResourcesFitInput"></a>

```typescript
public readonly nodeResourcesFitInput: EksClusterKubeSchedulerConfigNodeResourcesFit;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigNodeResourcesFit">EksClusterKubeSchedulerConfigNodeResourcesFit</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterKubeSchedulerConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterKubeSchedulerConfig">EksClusterKubeSchedulerConfig</a>

---


### EksClusterOutpostConfigControlPlanePlacementOutputReference <a name="EksClusterOutpostConfigControlPlanePlacementOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetSpreadLevel">resetSpreadLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetSpreadLevel` <a name="resetSpreadLevel" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resetSpreadLevel"></a>

```typescript
public resetSpreadLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevelInput">spreadLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel">spreadLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `spreadLevelInput`<sup>Optional</sup> <a name="spreadLevelInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevelInput"></a>

```typescript
public readonly spreadLevelInput: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `spreadLevel`<sup>Required</sup> <a name="spreadLevel" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel"></a>

```typescript
public readonly spreadLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterOutpostConfigControlPlanePlacement;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---


### EksClusterOutpostConfigEtcdPlacementOutputReference <a name="EksClusterOutpostConfigEtcdPlacementOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resetSpreadLevel">resetSpreadLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpreadLevel` <a name="resetSpreadLevel" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.resetSpreadLevel"></a>

```typescript
public resetSpreadLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevelInput">spreadLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel">spreadLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spreadLevelInput`<sup>Optional</sup> <a name="spreadLevelInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevelInput"></a>

```typescript
public readonly spreadLevelInput: string;
```

- *Type:* string

---

##### `spreadLevel`<sup>Required</sup> <a name="spreadLevel" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel"></a>

```typescript
public readonly spreadLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterOutpostConfigEtcdPlacement;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---


### EksClusterOutpostConfigOutputReference <a name="EksClusterOutpostConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterOutpostConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement">putControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement">putEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement">resetControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdInstanceType">resetEtcdInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdPlacement">resetEtcdPlacement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlanePlacement` <a name="putControlPlanePlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement"></a>

```typescript
public putControlPlanePlacement(value: EksClusterOutpostConfigControlPlanePlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `putEtcdPlacement` <a name="putEtcdPlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement"></a>

```typescript
public putEtcdPlacement(value: EksClusterOutpostConfigEtcdPlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putEtcdPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---

##### `resetControlPlanePlacement` <a name="resetControlPlanePlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement"></a>

```typescript
public resetControlPlanePlacement(): void
```

##### `resetEtcdInstanceType` <a name="resetEtcdInstanceType" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdInstanceType"></a>

```typescript
public resetEtcdInstanceType(): void
```

##### `resetEtcdPlacement` <a name="resetEtcdPlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetEtcdPlacement"></a>

```typescript
public resetEtcdPlacement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement">controlPlanePlacement</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacement">etcdPlacement</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference">EksClusterOutpostConfigEtcdPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput">controlPlaneInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput">controlPlanePlacementInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceTypeInput">etcdInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacementInput">etcdPlacementInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput">outpostArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType">controlPlaneInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceType">etcdInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns">outpostArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlanePlacement`<sup>Required</sup> <a name="controlPlanePlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement"></a>

```typescript
public readonly controlPlanePlacement: EksClusterOutpostConfigControlPlanePlacementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a>

---

##### `etcdPlacement`<sup>Required</sup> <a name="etcdPlacement" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacement"></a>

```typescript
public readonly etcdPlacement: EksClusterOutpostConfigEtcdPlacementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacementOutputReference">EksClusterOutpostConfigEtcdPlacementOutputReference</a>

---

##### `controlPlaneInstanceTypeInput`<sup>Optional</sup> <a name="controlPlaneInstanceTypeInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput"></a>

```typescript
public readonly controlPlaneInstanceTypeInput: string;
```

- *Type:* string

---

##### `controlPlanePlacementInput`<sup>Optional</sup> <a name="controlPlanePlacementInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput"></a>

```typescript
public readonly controlPlanePlacementInput: EksClusterOutpostConfigControlPlanePlacement;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `etcdInstanceTypeInput`<sup>Optional</sup> <a name="etcdInstanceTypeInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceTypeInput"></a>

```typescript
public readonly etcdInstanceTypeInput: string;
```

- *Type:* string

---

##### `etcdPlacementInput`<sup>Optional</sup> <a name="etcdPlacementInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdPlacementInput"></a>

```typescript
public readonly etcdPlacementInput: EksClusterOutpostConfigEtcdPlacement;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigEtcdPlacement">EksClusterOutpostConfigEtcdPlacement</a>

---

##### `outpostArnsInput`<sup>Optional</sup> <a name="outpostArnsInput" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput"></a>

```typescript
public readonly outpostArnsInput: string[];
```

- *Type:* string[]

---

##### `controlPlaneInstanceType`<sup>Required</sup> <a name="controlPlaneInstanceType" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType"></a>

```typescript
public readonly controlPlaneInstanceType: string;
```

- *Type:* string

---

##### `etcdInstanceType`<sup>Required</sup> <a name="etcdInstanceType" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.etcdInstanceType"></a>

```typescript
public readonly etcdInstanceType: string;
```

- *Type:* string

---

##### `outpostArns`<sup>Required</sup> <a name="outpostArns" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns"></a>

```typescript
public readonly outpostArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterOutpostConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---


### EksClusterRemoteNetworkConfigOutputReference <a name="EksClusterRemoteNetworkConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterRemoteNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks">putRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks">putRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemoteNodeNetworks">resetRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks">resetRemotePodNetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemoteNodeNetworks` <a name="putRemoteNodeNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks"></a>

```typescript
public putRemoteNodeNetworks(value: EksClusterRemoteNetworkConfigRemoteNodeNetworks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---

##### `putRemotePodNetworks` <a name="putRemotePodNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks"></a>

```typescript
public putRemotePodNetworks(value: EksClusterRemoteNetworkConfigRemotePodNetworks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---

##### `resetRemoteNodeNetworks` <a name="resetRemoteNodeNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemoteNodeNetworks"></a>

```typescript
public resetRemoteNodeNetworks(): void
```

##### `resetRemotePodNetworks` <a name="resetRemotePodNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks"></a>

```typescript
public resetRemotePodNetworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks">remoteNodeNetworks</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference">EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks">remotePodNetworks</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference">EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput">remoteNodeNetworksInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput">remotePodNetworksInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `remoteNodeNetworks`<sup>Required</sup> <a name="remoteNodeNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks"></a>

```typescript
public readonly remoteNodeNetworks: EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference">EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference</a>

---

##### `remotePodNetworks`<sup>Required</sup> <a name="remotePodNetworks" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks"></a>

```typescript
public readonly remotePodNetworks: EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference">EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference</a>

---

##### `remoteNodeNetworksInput`<sup>Optional</sup> <a name="remoteNodeNetworksInput" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput"></a>

```typescript
public readonly remoteNodeNetworksInput: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---

##### `remotePodNetworksInput`<sup>Optional</sup> <a name="remotePodNetworksInput" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput"></a>

```typescript
public readonly remotePodNetworksInput: EksClusterRemoteNetworkConfigRemotePodNetworks;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterRemoteNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---


### EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs"></a>

```typescript
public resetCidrs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput"></a>

```typescript
public readonly cidrsInput: string[];
```

- *Type:* string[]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---


### EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs"></a>

```typescript
public resetCidrs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput"></a>

```typescript
public readonly cidrsInput: string[];
```

- *Type:* string[]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterRemoteNetworkConfigRemotePodNetworks;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---


### EksClusterStorageConfigBlockStorageOutputReference <a name="EksClusterStorageConfigBlockStorageOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterStorageConfigBlockStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterStorageConfigBlockStorage;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---


### EksClusterStorageConfigOutputReference <a name="EksClusterStorageConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage">putBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage">resetBlockStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlockStorage` <a name="putBlockStorage" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage"></a>

```typescript
public putBlockStorage(value: EksClusterStorageConfigBlockStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `resetBlockStorage` <a name="resetBlockStorage" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage"></a>

```typescript
public resetBlockStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage">blockStorage</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput">blockStorageInput</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockStorage`<sup>Required</sup> <a name="blockStorage" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage"></a>

```typescript
public readonly blockStorage: EksClusterStorageConfigBlockStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a>

---

##### `blockStorageInput`<sup>Optional</sup> <a name="blockStorageInput" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput"></a>

```typescript
public readonly blockStorageInput: EksClusterStorageConfigBlockStorage;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---


### EksClusterTimeoutsOutputReference <a name="EksClusterTimeoutsOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

---


### EksClusterUpgradePolicyOutputReference <a name="EksClusterUpgradePolicyOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterUpgradePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType">resetSupportType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportType` <a name="resetSupportType" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType"></a>

```typescript
public resetSupportType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput">supportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType">supportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `supportTypeInput`<sup>Optional</sup> <a name="supportTypeInput" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput"></a>

```typescript
public readonly supportTypeInput: string;
```

- *Type:* string

---

##### `supportType`<sup>Required</sup> <a name="supportType" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType"></a>

```typescript
public readonly supportType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---


### EksClusterVpcConfigOutputReference <a name="EksClusterVpcConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetControlPlaneEgressMode">resetControlPlaneEgressMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPrivateAccess">resetEndpointPrivateAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPublicAccess">resetEndpointPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetPublicAccessCidrs">resetPublicAccessCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneEgressMode` <a name="resetControlPlaneEgressMode" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetControlPlaneEgressMode"></a>

```typescript
public resetControlPlaneEgressMode(): void
```

##### `resetEndpointPrivateAccess` <a name="resetEndpointPrivateAccess" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPrivateAccess"></a>

```typescript
public resetEndpointPrivateAccess(): void
```

##### `resetEndpointPublicAccess` <a name="resetEndpointPublicAccess" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPublicAccess"></a>

```typescript
public resetEndpointPublicAccess(): void
```

##### `resetPublicAccessCidrs` <a name="resetPublicAccessCidrs" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetPublicAccessCidrs"></a>

```typescript
public resetPublicAccessCidrs(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.clusterSecurityGroupId">clusterSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.controlPlaneEgressModeInput">controlPlaneEgressModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccessInput">endpointPrivateAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccessInput">endpointPublicAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrsInput">publicAccessCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.controlPlaneEgressMode">controlPlaneEgressMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccess">endpointPrivateAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccess">endpointPublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrs">publicAccessCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterSecurityGroupId`<sup>Required</sup> <a name="clusterSecurityGroupId" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.clusterSecurityGroupId"></a>

```typescript
public readonly clusterSecurityGroupId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `controlPlaneEgressModeInput`<sup>Optional</sup> <a name="controlPlaneEgressModeInput" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.controlPlaneEgressModeInput"></a>

```typescript
public readonly controlPlaneEgressModeInput: string;
```

- *Type:* string

---

##### `endpointPrivateAccessInput`<sup>Optional</sup> <a name="endpointPrivateAccessInput" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccessInput"></a>

```typescript
public readonly endpointPrivateAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointPublicAccessInput`<sup>Optional</sup> <a name="endpointPublicAccessInput" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccessInput"></a>

```typescript
public readonly endpointPublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `publicAccessCidrsInput`<sup>Optional</sup> <a name="publicAccessCidrsInput" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrsInput"></a>

```typescript
public readonly publicAccessCidrsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `controlPlaneEgressMode`<sup>Required</sup> <a name="controlPlaneEgressMode" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.controlPlaneEgressMode"></a>

```typescript
public readonly controlPlaneEgressMode: string;
```

- *Type:* string

---

##### `endpointPrivateAccess`<sup>Required</sup> <a name="endpointPrivateAccess" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccess"></a>

```typescript
public readonly endpointPrivateAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointPublicAccess`<sup>Required</sup> <a name="endpointPublicAccess" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccess"></a>

```typescript
public readonly endpointPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `publicAccessCidrs`<sup>Required</sup> <a name="publicAccessCidrs" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrs"></a>

```typescript
public readonly publicAccessCidrs: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---


### EksClusterZonalShiftConfigOutputReference <a name="EksClusterZonalShiftConfigOutputReference" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer"></a>

```typescript
import { eksCluster } from '@cdktn/provider-aws'

new eksCluster.EksClusterZonalShiftConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksClusterZonalShiftConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---



