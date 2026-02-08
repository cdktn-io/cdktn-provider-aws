# `sagemakerLabelingJob` Submodule <a name="`sagemakerLabelingJob` Submodule" id="@cdktn/provider-aws.sagemakerLabelingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerLabelingJob <a name="SagemakerLabelingJob" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJob(scope: Construct, id: string, config: SagemakerLabelingJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig">SagemakerLabelingJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig">SagemakerLabelingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig">putHumanTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig">putInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig">putLabelingJobAlgorithmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions">putStoppingConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig">resetHumanTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig">resetInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri">resetLabelCategoryConfigS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig">resetLabelingJobAlgorithmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig">resetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions">resetStoppingConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHumanTaskConfig` <a name="putHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig"></a>

```typescript
public putHumanTaskConfig(value: IResolvable | SagemakerLabelingJobHumanTaskConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

---

##### `putInputConfig` <a name="putInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig"></a>

```typescript
public putInputConfig(value: IResolvable | SagemakerLabelingJobInputConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

---

##### `putLabelingJobAlgorithmsConfig` <a name="putLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig"></a>

```typescript
public putLabelingJobAlgorithmsConfig(value: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig"></a>

```typescript
public putOutputConfig(value: IResolvable | SagemakerLabelingJobOutputConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

---

##### `putStoppingConditions` <a name="putStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions"></a>

```typescript
public putStoppingConditions(value: IResolvable | SagemakerLabelingJobStoppingConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

---

##### `resetHumanTaskConfig` <a name="resetHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig"></a>

```typescript
public resetHumanTaskConfig(): void
```

##### `resetInputConfig` <a name="resetInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig"></a>

```typescript
public resetInputConfig(): void
```

##### `resetLabelCategoryConfigS3Uri` <a name="resetLabelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri"></a>

```typescript
public resetLabelCategoryConfigS3Uri(): void
```

##### `resetLabelingJobAlgorithmsConfig` <a name="resetLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig"></a>

```typescript
public resetLabelingJobAlgorithmsConfig(): void
```

##### `resetOutputConfig` <a name="resetOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig"></a>

```typescript
public resetOutputConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStoppingConditions` <a name="resetStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions"></a>

```typescript
public resetStoppingConditions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerLabelingJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

sagemakerLabelingJob.SagemakerLabelingJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerLabelingJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerLabelingJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerLabelingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerLabelingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig">humanTaskConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig">inputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode">jobReferenceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters">labelCounters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig">labelingJobAlgorithmsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn">labelingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus">labelingJobStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions">stoppingConditions</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput">humanTaskConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput">inputConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput">labelAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput">labelCategoryConfigS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput">labelingJobAlgorithmsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput">labelingJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput">outputConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput">stoppingConditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName">labelAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri">labelCategoryConfigS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName">labelingJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `humanTaskConfig`<sup>Required</sup> <a name="humanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig"></a>

```typescript
public readonly humanTaskConfig: SagemakerLabelingJobHumanTaskConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a>

---

##### `inputConfig`<sup>Required</sup> <a name="inputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig"></a>

```typescript
public readonly inputConfig: SagemakerLabelingJobInputConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a>

---

##### `jobReferenceCode`<sup>Required</sup> <a name="jobReferenceCode" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode"></a>

```typescript
public readonly jobReferenceCode: string;
```

- *Type:* string

---

##### `labelCounters`<sup>Required</sup> <a name="labelCounters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters"></a>

```typescript
public readonly labelCounters: SagemakerLabelingJobLabelCountersList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a>

---

##### `labelingJobAlgorithmsConfig`<sup>Required</sup> <a name="labelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig"></a>

```typescript
public readonly labelingJobAlgorithmsConfig: SagemakerLabelingJobLabelingJobAlgorithmsConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a>

---

##### `labelingJobArn`<sup>Required</sup> <a name="labelingJobArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn"></a>

```typescript
public readonly labelingJobArn: string;
```

- *Type:* string

---

##### `labelingJobStatus`<sup>Required</sup> <a name="labelingJobStatus" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus"></a>

```typescript
public readonly labelingJobStatus: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerLabelingJobOutputConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a>

---

##### `stoppingConditions`<sup>Required</sup> <a name="stoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions"></a>

```typescript
public readonly stoppingConditions: SagemakerLabelingJobStoppingConditionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `humanTaskConfigInput`<sup>Optional</sup> <a name="humanTaskConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput"></a>

```typescript
public readonly humanTaskConfigInput: IResolvable | SagemakerLabelingJobHumanTaskConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

---

##### `inputConfigInput`<sup>Optional</sup> <a name="inputConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput"></a>

```typescript
public readonly inputConfigInput: IResolvable | SagemakerLabelingJobInputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

---

##### `labelAttributeNameInput`<sup>Optional</sup> <a name="labelAttributeNameInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput"></a>

```typescript
public readonly labelAttributeNameInput: string;
```

- *Type:* string

---

##### `labelCategoryConfigS3UriInput`<sup>Optional</sup> <a name="labelCategoryConfigS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput"></a>

```typescript
public readonly labelCategoryConfigS3UriInput: string;
```

- *Type:* string

---

##### `labelingJobAlgorithmsConfigInput`<sup>Optional</sup> <a name="labelingJobAlgorithmsConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput"></a>

```typescript
public readonly labelingJobAlgorithmsConfigInput: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

---

##### `labelingJobNameInput`<sup>Optional</sup> <a name="labelingJobNameInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput"></a>

```typescript
public readonly labelingJobNameInput: string;
```

- *Type:* string

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: IResolvable | SagemakerLabelingJobOutputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stoppingConditionsInput`<sup>Optional</sup> <a name="stoppingConditionsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput"></a>

```typescript
public readonly stoppingConditionsInput: IResolvable | SagemakerLabelingJobStoppingConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelAttributeName`<sup>Required</sup> <a name="labelAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName"></a>

```typescript
public readonly labelAttributeName: string;
```

- *Type:* string

---

##### `labelCategoryConfigS3Uri`<sup>Required</sup> <a name="labelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri"></a>

```typescript
public readonly labelCategoryConfigS3Uri: string;
```

- *Type:* string

---

##### `labelingJobName`<sup>Required</sup> <a name="labelingJobName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName"></a>

```typescript
public readonly labelingJobName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerLabelingJobConfig <a name="SagemakerLabelingJobConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobConfig: sagemakerLabelingJob.SagemakerLabelingJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName">labelAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName">labelingJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig">humanTaskConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]</code> | human_task_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig">inputConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]</code> | input_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri">labelCategoryConfigS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig">labelingJobAlgorithmsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]</code> | labeling_job_algorithms_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig">outputConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]</code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions">stoppingConditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `labelAttributeName`<sup>Required</sup> <a name="labelAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName"></a>

```typescript
public readonly labelAttributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}.

---

##### `labelingJobName`<sup>Required</sup> <a name="labelingJobName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName"></a>

```typescript
public readonly labelingJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}.

---

##### `humanTaskConfig`<sup>Optional</sup> <a name="humanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig"></a>

```typescript
public readonly humanTaskConfig: IResolvable | SagemakerLabelingJobHumanTaskConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

human_task_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_config SagemakerLabelingJob#human_task_config}

---

##### `inputConfig`<sup>Optional</sup> <a name="inputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig"></a>

```typescript
public readonly inputConfig: IResolvable | SagemakerLabelingJobInputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

input_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#input_config SagemakerLabelingJob#input_config}

---

##### `labelCategoryConfigS3Uri`<sup>Optional</sup> <a name="labelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri"></a>

```typescript
public readonly labelCategoryConfigS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}.

---

##### `labelingJobAlgorithmsConfig`<sup>Optional</sup> <a name="labelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig"></a>

```typescript
public readonly labelingJobAlgorithmsConfig: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

labeling_job_algorithms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config SagemakerLabelingJob#labeling_job_algorithms_config}

---

##### `outputConfig`<sup>Optional</sup> <a name="outputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: IResolvable | SagemakerLabelingJobOutputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#output_config SagemakerLabelingJob#output_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#region SagemakerLabelingJob#region}

---

##### `stoppingConditions`<sup>Optional</sup> <a name="stoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions"></a>

```typescript
public readonly stoppingConditions: IResolvable | SagemakerLabelingJobStoppingConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}.

---

### SagemakerLabelingJobHumanTaskConfig <a name="SagemakerLabelingJobHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobHumanTaskConfig: sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject">numberOfHumanWorkersPerDataObject</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription">taskDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle">taskTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn">workteamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig">annotationConsolidationConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]</code> | annotation_consolidation_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount">maxConcurrentTaskCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn">preHumanTaskLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]</code> | public_workforce_task_price block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords">taskKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig">uiConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]</code> | ui_config block. |

---

##### `numberOfHumanWorkersPerDataObject`<sup>Required</sup> <a name="numberOfHumanWorkersPerDataObject" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject"></a>

```typescript
public readonly numberOfHumanWorkersPerDataObject: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}.

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription"></a>

```typescript
public readonly taskDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}.

---

##### `taskTimeLimitInSeconds`<sup>Required</sup> <a name="taskTimeLimitInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds"></a>

```typescript
public readonly taskTimeLimitInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}.

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle"></a>

```typescript
public readonly taskTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}.

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn"></a>

```typescript
public readonly workteamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}.

---

##### `annotationConsolidationConfig`<sup>Optional</sup> <a name="annotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig"></a>

```typescript
public readonly annotationConsolidationConfig: IResolvable | SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

annotation_consolidation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_config SagemakerLabelingJob#annotation_consolidation_config}

---

##### `maxConcurrentTaskCount`<sup>Optional</sup> <a name="maxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount"></a>

```typescript
public readonly maxConcurrentTaskCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}.

---

##### `preHumanTaskLambdaArn`<sup>Optional</sup> <a name="preHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn"></a>

```typescript
public readonly preHumanTaskLambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}.

---

##### `publicWorkforceTaskPrice`<sup>Optional</sup> <a name="publicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice"></a>

```typescript
public readonly publicWorkforceTaskPrice: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#public_workforce_task_price SagemakerLabelingJob#public_workforce_task_price}

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```typescript
public readonly taskAvailabilityLifetimeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}.

---

##### `taskKeywords`<sup>Optional</sup> <a name="taskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords"></a>

```typescript
public readonly taskKeywords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}.

---

##### `uiConfig`<sup>Optional</sup> <a name="uiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig"></a>

```typescript
public readonly uiConfig: IResolvable | SagemakerLabelingJobHumanTaskConfigUiConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

ui_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_config SagemakerLabelingJob#ui_config}

---

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig: sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn">annotationConsolidationLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}. |

---

##### `annotationConsolidationLambdaArn`<sup>Required</sup> <a name="annotationConsolidationLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn"></a>

```typescript
public readonly annotationConsolidationLambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}.

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice: sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd">amountInUsd</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]</code> | amount_in_usd block. |

---

##### `amountInUsd`<sup>Optional</sup> <a name="amountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```typescript
public readonly amountInUsd: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

amount_in_usd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#amount_in_usd SagemakerLabelingJob#amount_in_usd}

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd: sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">cents</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">dollars</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}. |

---

##### `cents`<sup>Optional</sup> <a name="cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```typescript
public readonly cents: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}.

---

##### `dollars`<sup>Optional</sup> <a name="dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```typescript
public readonly dollars: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}.

---

##### `tenthFractionsOfACent`<sup>Optional</sup> <a name="tenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```typescript
public readonly tenthFractionsOfACent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}.

---

### SagemakerLabelingJobHumanTaskConfigUiConfig <a name="SagemakerLabelingJobHumanTaskConfigUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobHumanTaskConfigUiConfig: sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri">uiTemplateS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}. |

---

##### `humanTaskUiArn`<sup>Optional</sup> <a name="humanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn"></a>

```typescript
public readonly humanTaskUiArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}.

---

##### `uiTemplateS3Uri`<sup>Optional</sup> <a name="uiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri"></a>

```typescript
public readonly uiTemplateS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}.

---

### SagemakerLabelingJobInputConfig <a name="SagemakerLabelingJobInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobInputConfig: sagemakerLabelingJob.SagemakerLabelingJobInputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes">dataAttributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]</code> | data_attributes block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource">dataSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]</code> | data_source block. |

---

##### `dataAttributes`<sup>Optional</sup> <a name="dataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes"></a>

```typescript
public readonly dataAttributes: IResolvable | SagemakerLabelingJobInputConfigDataAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

data_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#data_attributes SagemakerLabelingJob#data_attributes}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource"></a>

```typescript
public readonly dataSource: IResolvable | SagemakerLabelingJobInputConfigDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#data_source SagemakerLabelingJob#data_source}

---

### SagemakerLabelingJobInputConfigDataAttributes <a name="SagemakerLabelingJobInputConfigDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobInputConfigDataAttributes: sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers">contentClassifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}. |

---

##### `contentClassifiers`<sup>Optional</sup> <a name="contentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers"></a>

```typescript
public readonly contentClassifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}.

---

### SagemakerLabelingJobInputConfigDataSource <a name="SagemakerLabelingJobInputConfigDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobInputConfigDataSource: sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource">s3DataSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]</code> | s3_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource">snsDataSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]</code> | sns_data_source block. |

---

##### `s3DataSource`<sup>Optional</sup> <a name="s3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource"></a>

```typescript
public readonly s3DataSource: IResolvable | SagemakerLabelingJobInputConfigDataSourceS3DataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_data_source SagemakerLabelingJob#s3_data_source}

---

##### `snsDataSource`<sup>Optional</sup> <a name="snsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource"></a>

```typescript
public readonly snsDataSource: IResolvable | SagemakerLabelingJobInputConfigDataSourceSnsDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

sns_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_data_source SagemakerLabelingJob#sns_data_source}

---

### SagemakerLabelingJobInputConfigDataSourceS3DataSource <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobInputConfigDataSourceS3DataSource: sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri">manifestS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}. |

---

##### `manifestS3Uri`<sup>Required</sup> <a name="manifestS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri"></a>

```typescript
public readonly manifestS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}.

---

### SagemakerLabelingJobInputConfigDataSourceSnsDataSource <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobInputConfigDataSourceSnsDataSource: sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobLabelCounters <a name="SagemakerLabelingJobLabelCounters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobLabelCounters: sagemakerLabelingJob.SagemakerLabelingJobLabelCounters = { ... }
```


### SagemakerLabelingJobLabelingJobAlgorithmsConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobLabelingJobAlgorithmsConfig: sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn">labelingJobAlgorithmSpecificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn">initialActiveLearningModelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig">labelingJobResourceConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]</code> | labeling_job_resource_config block. |

---

##### `labelingJobAlgorithmSpecificationArn`<sup>Required</sup> <a name="labelingJobAlgorithmSpecificationArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn"></a>

```typescript
public readonly labelingJobAlgorithmSpecificationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}.

---

##### `initialActiveLearningModelArn`<sup>Optional</sup> <a name="initialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn"></a>

```typescript
public readonly initialActiveLearningModelArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}.

---

##### `labelingJobResourceConfig`<sup>Optional</sup> <a name="labelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig"></a>

```typescript
public readonly labelingJobResourceConfig: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

labeling_job_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_resource_config SagemakerLabelingJob#labeling_job_resource_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig: sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig">vpcConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]</code> | vpc_config block. |

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#vpc_config SagemakerLabelingJob#vpc_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig: sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}.

---

### SagemakerLabelingJobOutputConfig <a name="SagemakerLabelingJobOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobOutputConfig: sagemakerLabelingJob.SagemakerLabelingJobOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobStoppingConditions <a name="SagemakerLabelingJobStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

const sagemakerLabelingJobStoppingConditions: sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount">maxHumanLabeledObjectCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled">maxPercentageOfInputDatasetLabeled</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}. |

---

##### `maxHumanLabeledObjectCount`<sup>Optional</sup> <a name="maxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount"></a>

```typescript
public readonly maxHumanLabeledObjectCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}.

---

##### `maxPercentageOfInputDatasetLabeled`<sup>Optional</sup> <a name="maxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled"></a>

```typescript
public readonly maxPercentageOfInputDatasetLabeled: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

---


### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput">annotationConsolidationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn">annotationConsolidationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotationConsolidationLambdaArnInput`<sup>Optional</sup> <a name="annotationConsolidationLambdaArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput"></a>

```typescript
public readonly annotationConsolidationLambdaArnInput: string;
```

- *Type:* string

---

##### `annotationConsolidationLambdaArn`<sup>Required</sup> <a name="annotationConsolidationLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn"></a>

```typescript
public readonly annotationConsolidationLambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigList <a name="SagemakerLabelingJobHumanTaskConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobHumanTaskConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

---


### SagemakerLabelingJobHumanTaskConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig">putAnnotationConsolidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice">putPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig">putUiConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig">resetAnnotationConsolidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount">resetMaxConcurrentTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn">resetPreHumanTaskLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice">resetPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">resetTaskAvailabilityLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords">resetTaskKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig">resetUiConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnnotationConsolidationConfig` <a name="putAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig"></a>

```typescript
public putAnnotationConsolidationConfig(value: IResolvable | SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

---

##### `putPublicWorkforceTaskPrice` <a name="putPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```typescript
public putPublicWorkforceTaskPrice(value: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

---

##### `putUiConfig` <a name="putUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig"></a>

```typescript
public putUiConfig(value: IResolvable | SagemakerLabelingJobHumanTaskConfigUiConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

---

##### `resetAnnotationConsolidationConfig` <a name="resetAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig"></a>

```typescript
public resetAnnotationConsolidationConfig(): void
```

##### `resetMaxConcurrentTaskCount` <a name="resetMaxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount"></a>

```typescript
public resetMaxConcurrentTaskCount(): void
```

##### `resetPreHumanTaskLambdaArn` <a name="resetPreHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn"></a>

```typescript
public resetPreHumanTaskLambdaArn(): void
```

##### `resetPublicWorkforceTaskPrice` <a name="resetPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```typescript
public resetPublicWorkforceTaskPrice(): void
```

##### `resetTaskAvailabilityLifetimeInSeconds` <a name="resetTaskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```typescript
public resetTaskAvailabilityLifetimeInSeconds(): void
```

##### `resetTaskKeywords` <a name="resetTaskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords"></a>

```typescript
public resetTaskKeywords(): void
```

##### `resetUiConfig` <a name="resetUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig"></a>

```typescript
public resetUiConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig">annotationConsolidationConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig">uiConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput">annotationConsolidationConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput">maxConcurrentTaskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput">numberOfHumanWorkersPerDataObjectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput">preHumanTaskLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput">publicWorkforceTaskPriceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">taskAvailabilityLifetimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput">taskDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput">taskKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput">taskTimeLimitInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput">taskTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput">uiConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput">workteamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount">maxConcurrentTaskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject">numberOfHumanWorkersPerDataObject</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn">preHumanTaskLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription">taskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords">taskKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle">taskTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn">workteamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotationConsolidationConfig`<sup>Required</sup> <a name="annotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig"></a>

```typescript
public readonly annotationConsolidationConfig: SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a>

---

##### `publicWorkforceTaskPrice`<sup>Required</sup> <a name="publicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```typescript
public readonly publicWorkforceTaskPrice: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a>

---

##### `uiConfig`<sup>Required</sup> <a name="uiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig"></a>

```typescript
public readonly uiConfig: SagemakerLabelingJobHumanTaskConfigUiConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a>

---

##### `annotationConsolidationConfigInput`<sup>Optional</sup> <a name="annotationConsolidationConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput"></a>

```typescript
public readonly annotationConsolidationConfigInput: IResolvable | SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

---

##### `maxConcurrentTaskCountInput`<sup>Optional</sup> <a name="maxConcurrentTaskCountInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput"></a>

```typescript
public readonly maxConcurrentTaskCountInput: number;
```

- *Type:* number

---

##### `numberOfHumanWorkersPerDataObjectInput`<sup>Optional</sup> <a name="numberOfHumanWorkersPerDataObjectInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput"></a>

```typescript
public readonly numberOfHumanWorkersPerDataObjectInput: number;
```

- *Type:* number

---

##### `preHumanTaskLambdaArnInput`<sup>Optional</sup> <a name="preHumanTaskLambdaArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput"></a>

```typescript
public readonly preHumanTaskLambdaArnInput: string;
```

- *Type:* string

---

##### `publicWorkforceTaskPriceInput`<sup>Optional</sup> <a name="publicWorkforceTaskPriceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```typescript
public readonly publicWorkforceTaskPriceInput: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

---

##### `taskAvailabilityLifetimeInSecondsInput`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSecondsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```typescript
public readonly taskAvailabilityLifetimeInSecondsInput: number;
```

- *Type:* number

---

##### `taskDescriptionInput`<sup>Optional</sup> <a name="taskDescriptionInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput"></a>

```typescript
public readonly taskDescriptionInput: string;
```

- *Type:* string

---

##### `taskKeywordsInput`<sup>Optional</sup> <a name="taskKeywordsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput"></a>

```typescript
public readonly taskKeywordsInput: string[];
```

- *Type:* string[]

---

##### `taskTimeLimitInSecondsInput`<sup>Optional</sup> <a name="taskTimeLimitInSecondsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```typescript
public readonly taskTimeLimitInSecondsInput: number;
```

- *Type:* number

---

##### `taskTitleInput`<sup>Optional</sup> <a name="taskTitleInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput"></a>

```typescript
public readonly taskTitleInput: string;
```

- *Type:* string

---

##### `uiConfigInput`<sup>Optional</sup> <a name="uiConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput"></a>

```typescript
public readonly uiConfigInput: IResolvable | SagemakerLabelingJobHumanTaskConfigUiConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

---

##### `workteamArnInput`<sup>Optional</sup> <a name="workteamArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput"></a>

```typescript
public readonly workteamArnInput: string;
```

- *Type:* string

---

##### `maxConcurrentTaskCount`<sup>Required</sup> <a name="maxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount"></a>

```typescript
public readonly maxConcurrentTaskCount: number;
```

- *Type:* number

---

##### `numberOfHumanWorkersPerDataObject`<sup>Required</sup> <a name="numberOfHumanWorkersPerDataObject" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject"></a>

```typescript
public readonly numberOfHumanWorkersPerDataObject: number;
```

- *Type:* number

---

##### `preHumanTaskLambdaArn`<sup>Required</sup> <a name="preHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn"></a>

```typescript
public readonly preHumanTaskLambdaArn: string;
```

- *Type:* string

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Required</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```typescript
public readonly taskAvailabilityLifetimeInSeconds: number;
```

- *Type:* number

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription"></a>

```typescript
public readonly taskDescription: string;
```

- *Type:* string

---

##### `taskKeywords`<sup>Required</sup> <a name="taskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords"></a>

```typescript
public readonly taskKeywords: string[];
```

- *Type:* string[]

---

##### `taskTimeLimitInSeconds`<sup>Required</sup> <a name="taskTimeLimitInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```typescript
public readonly taskTimeLimitInSeconds: number;
```

- *Type:* number

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle"></a>

```typescript
public readonly taskTitle: string;
```

- *Type:* string

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn"></a>

```typescript
public readonly workteamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">resetCents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">resetDollars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">resetTenthFractionsOfACent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCents` <a name="resetCents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```typescript
public resetCents(): void
```

##### `resetDollars` <a name="resetDollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```typescript
public resetDollars(): void
```

##### `resetTenthFractionsOfACent` <a name="resetTenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```typescript
public resetTenthFractionsOfACent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">centsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">dollarsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">tenthFractionsOfACentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">cents</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">dollars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `centsInput`<sup>Optional</sup> <a name="centsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```typescript
public readonly centsInput: number;
```

- *Type:* number

---

##### `dollarsInput`<sup>Optional</sup> <a name="dollarsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```typescript
public readonly dollarsInput: number;
```

- *Type:* number

---

##### `tenthFractionsOfACentInput`<sup>Optional</sup> <a name="tenthFractionsOfACentInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```typescript
public readonly tenthFractionsOfACentInput: number;
```

- *Type:* number

---

##### `cents`<sup>Required</sup> <a name="cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```typescript
public readonly cents: number;
```

- *Type:* number

---

##### `dollars`<sup>Required</sup> <a name="dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```typescript
public readonly dollars: number;
```

- *Type:* number

---

##### `tenthFractionsOfACent`<sup>Required</sup> <a name="tenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```typescript
public readonly tenthFractionsOfACent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">putAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">resetAmountInUsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmountInUsd` <a name="putAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```typescript
public putAmountInUsd(value: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

---

##### `resetAmountInUsd` <a name="resetAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```typescript
public resetAmountInUsd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">amountInUsd</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">amountInUsdInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInUsd`<sup>Required</sup> <a name="amountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```typescript
public readonly amountInUsd: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a>

---

##### `amountInUsdInput`<sup>Optional</sup> <a name="amountInUsdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```typescript
public readonly amountInUsdInput: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>

---


### SagemakerLabelingJobHumanTaskConfigUiConfigList <a name="SagemakerLabelingJobHumanTaskConfigUiConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigUiConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

---


### SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn">resetHumanTaskUiArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri">resetUiTemplateS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHumanTaskUiArn` <a name="resetHumanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn"></a>

```typescript
public resetHumanTaskUiArn(): void
```

##### `resetUiTemplateS3Uri` <a name="resetUiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri"></a>

```typescript
public resetUiTemplateS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput">humanTaskUiArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput">uiTemplateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri">uiTemplateS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `humanTaskUiArnInput`<sup>Optional</sup> <a name="humanTaskUiArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput"></a>

```typescript
public readonly humanTaskUiArnInput: string;
```

- *Type:* string

---

##### `uiTemplateS3UriInput`<sup>Optional</sup> <a name="uiTemplateS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput"></a>

```typescript
public readonly uiTemplateS3UriInput: string;
```

- *Type:* string

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn"></a>

```typescript
public readonly humanTaskUiArn: string;
```

- *Type:* string

---

##### `uiTemplateS3Uri`<sup>Required</sup> <a name="uiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri"></a>

```typescript
public readonly uiTemplateS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobHumanTaskConfigUiConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>

---


### SagemakerLabelingJobInputConfigDataAttributesList <a name="SagemakerLabelingJobInputConfigDataAttributesList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobInputConfigDataAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

---


### SagemakerLabelingJobInputConfigDataAttributesOutputReference <a name="SagemakerLabelingJobInputConfigDataAttributesOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers">resetContentClassifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentClassifiers` <a name="resetContentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers"></a>

```typescript
public resetContentClassifiers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput">contentClassifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers">contentClassifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentClassifiersInput`<sup>Optional</sup> <a name="contentClassifiersInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput"></a>

```typescript
public readonly contentClassifiersInput: string[];
```

- *Type:* string[]

---

##### `contentClassifiers`<sup>Required</sup> <a name="contentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers"></a>

```typescript
public readonly contentClassifiers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>

---


### SagemakerLabelingJobInputConfigDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobInputConfigDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

---


### SagemakerLabelingJobInputConfigDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource">putS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource">putSnsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource">resetS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource">resetSnsDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3DataSource` <a name="putS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource"></a>

```typescript
public putS3DataSource(value: IResolvable | SagemakerLabelingJobInputConfigDataSourceS3DataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

---

##### `putSnsDataSource` <a name="putSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource"></a>

```typescript
public putSnsDataSource(value: IResolvable | SagemakerLabelingJobInputConfigDataSourceSnsDataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

---

##### `resetS3DataSource` <a name="resetS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource"></a>

```typescript
public resetS3DataSource(): void
```

##### `resetSnsDataSource` <a name="resetSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource"></a>

```typescript
public resetSnsDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource">snsDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput">s3DataSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput">snsDataSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3DataSource`<sup>Required</sup> <a name="s3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource"></a>

```typescript
public readonly s3DataSource: SagemakerLabelingJobInputConfigDataSourceS3DataSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a>

---

##### `snsDataSource`<sup>Required</sup> <a name="snsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource"></a>

```typescript
public readonly snsDataSource: SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a>

---

##### `s3DataSourceInput`<sup>Optional</sup> <a name="s3DataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```typescript
public readonly s3DataSourceInput: IResolvable | SagemakerLabelingJobInputConfigDataSourceS3DataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

---

##### `snsDataSourceInput`<sup>Optional</sup> <a name="snsDataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput"></a>

```typescript
public readonly snsDataSourceInput: IResolvable | SagemakerLabelingJobInputConfigDataSourceSnsDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataSourceS3DataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput">manifestS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri">manifestS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manifestS3UriInput`<sup>Optional</sup> <a name="manifestS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput"></a>

```typescript
public readonly manifestS3UriInput: string;
```

- *Type:* string

---

##### `manifestS3Uri`<sup>Required</sup> <a name="manifestS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri"></a>

```typescript
public readonly manifestS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataSourceS3DataSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataSourceSnsDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfigDataSourceSnsDataSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>

---


### SagemakerLabelingJobInputConfigList <a name="SagemakerLabelingJobInputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobInputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

---


### SagemakerLabelingJobInputConfigOutputReference <a name="SagemakerLabelingJobInputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes">putDataAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes">resetDataAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataAttributes` <a name="putDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes"></a>

```typescript
public putDataAttributes(value: IResolvable | SagemakerLabelingJobInputConfigDataAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

---

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource"></a>

```typescript
public putDataSource(value: IResolvable | SagemakerLabelingJobInputConfigDataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

---

##### `resetDataAttributes` <a name="resetDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes"></a>

```typescript
public resetDataAttributes(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes">dataAttributes</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput">dataAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataAttributes`<sup>Required</sup> <a name="dataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes"></a>

```typescript
public readonly dataAttributes: SagemakerLabelingJobInputConfigDataAttributesList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: SagemakerLabelingJobInputConfigDataSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a>

---

##### `dataAttributesInput`<sup>Optional</sup> <a name="dataAttributesInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput"></a>

```typescript
public readonly dataAttributesInput: IResolvable | SagemakerLabelingJobInputConfigDataAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: IResolvable | SagemakerLabelingJobInputConfigDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobInputConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>

---


### SagemakerLabelingJobLabelCountersList <a name="SagemakerLabelingJobLabelCountersList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobLabelCountersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SagemakerLabelingJobLabelCountersOutputReference <a name="SagemakerLabelingJobLabelCountersOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError">failedNonRetryableError</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled">humanLabeled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled">machineLabeled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled">totalLabeled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled">unlabeled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failedNonRetryableError`<sup>Required</sup> <a name="failedNonRetryableError" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError"></a>

```typescript
public readonly failedNonRetryableError: number;
```

- *Type:* number

---

##### `humanLabeled`<sup>Required</sup> <a name="humanLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled"></a>

```typescript
public readonly humanLabeled: number;
```

- *Type:* number

---

##### `machineLabeled`<sup>Required</sup> <a name="machineLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled"></a>

```typescript
public readonly machineLabeled: number;
```

- *Type:* number

---

##### `totalLabeled`<sup>Required</sup> <a name="totalLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled"></a>

```typescript
public readonly totalLabeled: number;
```

- *Type:* number

---

##### `unlabeled`<sup>Required</sup> <a name="unlabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled"></a>

```typescript
public readonly unlabeled: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerLabelingJobLabelCounters;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

---

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId"></a>

```typescript
public resetVolumeKmsKeyId(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a>

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```typescript
public readonly volumeKmsKeyIdInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig">putLabelingJobResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn">resetInitialActiveLearningModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig">resetLabelingJobResourceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelingJobResourceConfig` <a name="putLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig"></a>

```typescript
public putLabelingJobResourceConfig(value: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

---

##### `resetInitialActiveLearningModelArn` <a name="resetInitialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn"></a>

```typescript
public resetInitialActiveLearningModelArn(): void
```

##### `resetLabelingJobResourceConfig` <a name="resetLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig"></a>

```typescript
public resetLabelingJobResourceConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig">labelingJobResourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput">initialActiveLearningModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput">labelingJobAlgorithmSpecificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput">labelingJobResourceConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn">initialActiveLearningModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn">labelingJobAlgorithmSpecificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelingJobResourceConfig`<sup>Required</sup> <a name="labelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig"></a>

```typescript
public readonly labelingJobResourceConfig: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a>

---

##### `initialActiveLearningModelArnInput`<sup>Optional</sup> <a name="initialActiveLearningModelArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput"></a>

```typescript
public readonly initialActiveLearningModelArnInput: string;
```

- *Type:* string

---

##### `labelingJobAlgorithmSpecificationArnInput`<sup>Optional</sup> <a name="labelingJobAlgorithmSpecificationArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput"></a>

```typescript
public readonly labelingJobAlgorithmSpecificationArnInput: string;
```

- *Type:* string

---

##### `labelingJobResourceConfigInput`<sup>Optional</sup> <a name="labelingJobResourceConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput"></a>

```typescript
public readonly labelingJobResourceConfigInput: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

---

##### `initialActiveLearningModelArn`<sup>Required</sup> <a name="initialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn"></a>

```typescript
public readonly initialActiveLearningModelArn: string;
```

- *Type:* string

---

##### `labelingJobAlgorithmSpecificationArn`<sup>Required</sup> <a name="labelingJobAlgorithmSpecificationArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn"></a>

```typescript
public readonly labelingJobAlgorithmSpecificationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobLabelingJobAlgorithmsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>

---


### SagemakerLabelingJobOutputConfigList <a name="SagemakerLabelingJobOutputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobOutputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobOutputConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

---


### SagemakerLabelingJobOutputConfigOutputReference <a name="SagemakerLabelingJobOutputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput"></a>

```typescript
public readonly s3OutputPathInput: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobOutputConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>

---


### SagemakerLabelingJobStoppingConditionsList <a name="SagemakerLabelingJobStoppingConditionsList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get"></a>

```typescript
public get(index: number): SagemakerLabelingJobStoppingConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobStoppingConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

---


### SagemakerLabelingJobStoppingConditionsOutputReference <a name="SagemakerLabelingJobStoppingConditionsOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer"></a>

```typescript
import { sagemakerLabelingJob } from '@cdktn/provider-aws'

new sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount">resetMaxHumanLabeledObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled">resetMaxPercentageOfInputDatasetLabeled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxHumanLabeledObjectCount` <a name="resetMaxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount"></a>

```typescript
public resetMaxHumanLabeledObjectCount(): void
```

##### `resetMaxPercentageOfInputDatasetLabeled` <a name="resetMaxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled"></a>

```typescript
public resetMaxPercentageOfInputDatasetLabeled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput">maxHumanLabeledObjectCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput">maxPercentageOfInputDatasetLabeledInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount">maxHumanLabeledObjectCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled">maxPercentageOfInputDatasetLabeled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxHumanLabeledObjectCountInput`<sup>Optional</sup> <a name="maxHumanLabeledObjectCountInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput"></a>

```typescript
public readonly maxHumanLabeledObjectCountInput: number;
```

- *Type:* number

---

##### `maxPercentageOfInputDatasetLabeledInput`<sup>Optional</sup> <a name="maxPercentageOfInputDatasetLabeledInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput"></a>

```typescript
public readonly maxPercentageOfInputDatasetLabeledInput: number;
```

- *Type:* number

---

##### `maxHumanLabeledObjectCount`<sup>Required</sup> <a name="maxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount"></a>

```typescript
public readonly maxHumanLabeledObjectCount: number;
```

- *Type:* number

---

##### `maxPercentageOfInputDatasetLabeled`<sup>Required</sup> <a name="maxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled"></a>

```typescript
public readonly maxPercentageOfInputDatasetLabeled: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerLabelingJobStoppingConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>

---



