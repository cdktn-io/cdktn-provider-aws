# `dynamodbGlobalSecondaryIndex` Submodule <a name="`dynamodbGlobalSecondaryIndex` Submodule" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbGlobalSecondaryIndex <a name="DynamodbGlobalSecondaryIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index aws_dynamodb_global_secondary_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex(scope: Construct, id: string, config: DynamodbGlobalSecondaryIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig">DynamodbGlobalSecondaryIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig">DynamodbGlobalSecondaryIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putKeySchema">putKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putOnDemandThroughput">putOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProjection">putProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putWarmThroughput">putWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetKeySchema">resetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOnDemandThroughput">resetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProjection">resetProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetWarmThroughput">resetWarmThroughput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeySchema` <a name="putKeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putKeySchema"></a>

```typescript
public putKeySchema(value: IResolvable | DynamodbGlobalSecondaryIndexKeySchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putKeySchema.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

---

##### `putOnDemandThroughput` <a name="putOnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putOnDemandThroughput"></a>

```typescript
public putOnDemandThroughput(value: IResolvable | DynamodbGlobalSecondaryIndexOnDemandThroughput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putOnDemandThroughput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

---

##### `putProjection` <a name="putProjection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProjection"></a>

```typescript
public putProjection(value: IResolvable | DynamodbGlobalSecondaryIndexProjection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProjection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

---

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProvisionedThroughput"></a>

```typescript
public putProvisionedThroughput(value: IResolvable | DynamodbGlobalSecondaryIndexProvisionedThroughput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProvisionedThroughput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: DynamodbGlobalSecondaryIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

---

##### `putWarmThroughput` <a name="putWarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putWarmThroughput"></a>

```typescript
public putWarmThroughput(value: DynamodbGlobalSecondaryIndexWarmThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

---

##### `resetKeySchema` <a name="resetKeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetKeySchema"></a>

```typescript
public resetKeySchema(): void
```

##### `resetOnDemandThroughput` <a name="resetOnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOnDemandThroughput"></a>

```typescript
public resetOnDemandThroughput(): void
```

##### `resetProjection` <a name="resetProjection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProjection"></a>

```typescript
public resetProjection(): void
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWarmThroughput` <a name="resetWarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetWarmThroughput"></a>

```typescript
public resetWarmThroughput(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynamodbGlobalSecondaryIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isConstruct"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformElement"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformResource"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DynamodbGlobalSecondaryIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamodbGlobalSecondaryIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamodbGlobalSecondaryIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynamodbGlobalSecondaryIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList">DynamodbGlobalSecondaryIndexKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList">DynamodbGlobalSecondaryIndexOnDemandThroughputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList">DynamodbGlobalSecondaryIndexProjectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList">DynamodbGlobalSecondaryIndexProvisionedThroughputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference">DynamodbGlobalSecondaryIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference">DynamodbGlobalSecondaryIndexWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchemaInput">keySchemaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughputInput">onDemandThroughputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projectionInput">projectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughputInput">warmThroughputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchema"></a>

```typescript
public readonly keySchema: DynamodbGlobalSecondaryIndexKeySchemaList;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList">DynamodbGlobalSecondaryIndexKeySchemaList</a>

---

##### `onDemandThroughput`<sup>Required</sup> <a name="onDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughput"></a>

```typescript
public readonly onDemandThroughput: DynamodbGlobalSecondaryIndexOnDemandThroughputList;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList">DynamodbGlobalSecondaryIndexOnDemandThroughputList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projection"></a>

```typescript
public readonly projection: DynamodbGlobalSecondaryIndexProjectionList;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList">DynamodbGlobalSecondaryIndexProjectionList</a>

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: DynamodbGlobalSecondaryIndexProvisionedThroughputList;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList">DynamodbGlobalSecondaryIndexProvisionedThroughputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeouts"></a>

```typescript
public readonly timeouts: DynamodbGlobalSecondaryIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference">DynamodbGlobalSecondaryIndexTimeoutsOutputReference</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: DynamodbGlobalSecondaryIndexWarmThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference">DynamodbGlobalSecondaryIndexWarmThroughputOutputReference</a>

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchemaInput"></a>

```typescript
public readonly keySchemaInput: IResolvable | DynamodbGlobalSecondaryIndexKeySchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

---

##### `onDemandThroughputInput`<sup>Optional</sup> <a name="onDemandThroughputInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughputInput"></a>

```typescript
public readonly onDemandThroughputInput: IResolvable | DynamodbGlobalSecondaryIndexOnDemandThroughput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

---

##### `projectionInput`<sup>Optional</sup> <a name="projectionInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projectionInput"></a>

```typescript
public readonly projectionInput: IResolvable | DynamodbGlobalSecondaryIndexProjection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: IResolvable | DynamodbGlobalSecondaryIndexProvisionedThroughput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DynamodbGlobalSecondaryIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

---

##### `warmThroughputInput`<sup>Optional</sup> <a name="warmThroughputInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughputInput"></a>

```typescript
public readonly warmThroughputInput: IResolvable | DynamodbGlobalSecondaryIndexWarmThroughput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbGlobalSecondaryIndexConfig <a name="DynamodbGlobalSecondaryIndexConfig" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

const dynamodbGlobalSecondaryIndexConfig: dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#index_name DynamodbGlobalSecondaryIndex#index_name}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#table_name DynamodbGlobalSecondaryIndex#table_name}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.keySchema">keySchema</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]</code> | key_schema block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.onDemandThroughput">onDemandThroughput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]</code> | on_demand_throughput block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.projection">projection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]</code> | projection block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisionedThroughput">provisionedThroughput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]</code> | provisioned_throughput block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#warm_throughput DynamodbGlobalSecondaryIndex#warm_throughput}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#index_name DynamodbGlobalSecondaryIndex#index_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#table_name DynamodbGlobalSecondaryIndex#table_name}.

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.keySchema"></a>

```typescript
public readonly keySchema: IResolvable | DynamodbGlobalSecondaryIndexKeySchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

key_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#key_schema DynamodbGlobalSecondaryIndex#key_schema}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.onDemandThroughput"></a>

```typescript
public readonly onDemandThroughput: IResolvable | DynamodbGlobalSecondaryIndexOnDemandThroughput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

on_demand_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#on_demand_throughput DynamodbGlobalSecondaryIndex#on_demand_throughput}

---

##### `projection`<sup>Optional</sup> <a name="projection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.projection"></a>

```typescript
public readonly projection: IResolvable | DynamodbGlobalSecondaryIndexProjection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

projection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#projection DynamodbGlobalSecondaryIndex#projection}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: IResolvable | DynamodbGlobalSecondaryIndexProvisionedThroughput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

provisioned_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#provisioned_throughput DynamodbGlobalSecondaryIndex#provisioned_throughput}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#region DynamodbGlobalSecondaryIndex#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DynamodbGlobalSecondaryIndexTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#timeouts DynamodbGlobalSecondaryIndex#timeouts}

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: DynamodbGlobalSecondaryIndexWarmThroughput;
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#warm_throughput DynamodbGlobalSecondaryIndex#warm_throughput}.

---

### DynamodbGlobalSecondaryIndexKeySchema <a name="DynamodbGlobalSecondaryIndexKeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

const dynamodbGlobalSecondaryIndexKeySchema: dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeName">attributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#attribute_name DynamodbGlobalSecondaryIndex#attribute_name}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeType">attributeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#attribute_type DynamodbGlobalSecondaryIndex#attribute_type}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.keyType">keyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#key_type DynamodbGlobalSecondaryIndex#key_type}. |

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#attribute_name DynamodbGlobalSecondaryIndex#attribute_name}.

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#attribute_type DynamodbGlobalSecondaryIndex#attribute_type}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#key_type DynamodbGlobalSecondaryIndex#key_type}.

---

### DynamodbGlobalSecondaryIndexOnDemandThroughput <a name="DynamodbGlobalSecondaryIndexOnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

const dynamodbGlobalSecondaryIndexOnDemandThroughput: dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#max_read_request_units DynamodbGlobalSecondaryIndex#max_read_request_units}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#max_write_request_units DynamodbGlobalSecondaryIndex#max_write_request_units}. |

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits"></a>

```typescript
public readonly maxReadRequestUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#max_read_request_units DynamodbGlobalSecondaryIndex#max_read_request_units}.

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits"></a>

```typescript
public readonly maxWriteRequestUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#max_write_request_units DynamodbGlobalSecondaryIndex#max_write_request_units}.

---

### DynamodbGlobalSecondaryIndexProjection <a name="DynamodbGlobalSecondaryIndexProjection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

const dynamodbGlobalSecondaryIndexProjection: dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.projectionType">projectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#projection_type DynamodbGlobalSecondaryIndex#projection_type}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#non_key_attributes DynamodbGlobalSecondaryIndex#non_key_attributes}. |

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#projection_type DynamodbGlobalSecondaryIndex#projection_type}.

---

##### `nonKeyAttributes`<sup>Optional</sup> <a name="nonKeyAttributes" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#non_key_attributes DynamodbGlobalSecondaryIndex#non_key_attributes}.

---

### DynamodbGlobalSecondaryIndexProvisionedThroughput <a name="DynamodbGlobalSecondaryIndexProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

const dynamodbGlobalSecondaryIndexProvisionedThroughput: dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#read_capacity_units DynamodbGlobalSecondaryIndex#read_capacity_units}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#write_capacity_units DynamodbGlobalSecondaryIndex#write_capacity_units}. |

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#read_capacity_units DynamodbGlobalSecondaryIndex#read_capacity_units}.

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="writeCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#write_capacity_units DynamodbGlobalSecondaryIndex#write_capacity_units}.

---

### DynamodbGlobalSecondaryIndexTimeouts <a name="DynamodbGlobalSecondaryIndexTimeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

const dynamodbGlobalSecondaryIndexTimeouts: dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#create DynamodbGlobalSecondaryIndex#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#delete DynamodbGlobalSecondaryIndex#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#update DynamodbGlobalSecondaryIndex#update}

---

### DynamodbGlobalSecondaryIndexWarmThroughput <a name="DynamodbGlobalSecondaryIndexWarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

const dynamodbGlobalSecondaryIndexWarmThroughput: dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#read_units_per_second DynamodbGlobalSecondaryIndex#read_units_per_second}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#write_units_per_second DynamodbGlobalSecondaryIndex#write_units_per_second}. |

---

##### `readUnitsPerSecond`<sup>Optional</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#read_units_per_second DynamodbGlobalSecondaryIndex#read_units_per_second}.

---

##### `writeUnitsPerSecond`<sup>Optional</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#write_units_per_second DynamodbGlobalSecondaryIndex#write_units_per_second}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbGlobalSecondaryIndexKeySchemaList <a name="DynamodbGlobalSecondaryIndexKeySchemaList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.get"></a>

```typescript
public get(index: number): DynamodbGlobalSecondaryIndexKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexKeySchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

---


### DynamodbGlobalSecondaryIndexKeySchemaOutputReference <a name="DynamodbGlobalSecondaryIndexKeySchemaOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeTypeInput">attributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeType">attributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `attributeTypeInput`<sup>Optional</sup> <a name="attributeTypeInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeTypeInput"></a>

```typescript
public readonly attributeTypeInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexKeySchema;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>

---


### DynamodbGlobalSecondaryIndexOnDemandThroughputList <a name="DynamodbGlobalSecondaryIndexOnDemandThroughputList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.get"></a>

```typescript
public get(index: number): DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexOnDemandThroughput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

---


### DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference <a name="DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits">resetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">resetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReadRequestUnits` <a name="resetMaxReadRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```typescript
public resetMaxReadRequestUnits(): void
```

##### `resetMaxWriteRequestUnits` <a name="resetMaxWriteRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```typescript
public resetMaxWriteRequestUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">maxReadRequestUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">maxWriteRequestUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReadRequestUnitsInput`<sup>Optional</sup> <a name="maxReadRequestUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```typescript
public readonly maxReadRequestUnitsInput: number;
```

- *Type:* number

---

##### `maxWriteRequestUnitsInput`<sup>Optional</sup> <a name="maxWriteRequestUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```typescript
public readonly maxWriteRequestUnitsInput: number;
```

- *Type:* number

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```typescript
public readonly maxReadRequestUnits: number;
```

- *Type:* number

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```typescript
public readonly maxWriteRequestUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexOnDemandThroughput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>

---


### DynamodbGlobalSecondaryIndexProjectionList <a name="DynamodbGlobalSecondaryIndexProjectionList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.get"></a>

```typescript
public get(index: number): DynamodbGlobalSecondaryIndexProjectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexProjection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

---


### DynamodbGlobalSecondaryIndexProjectionOutputReference <a name="DynamodbGlobalSecondaryIndexProjectionOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resetNonKeyAttributes">resetNonKeyAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonKeyAttributes` <a name="resetNonKeyAttributes" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resetNonKeyAttributes"></a>

```typescript
public resetNonKeyAttributes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributesInput">nonKeyAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionTypeInput">projectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionType">projectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nonKeyAttributesInput`<sup>Optional</sup> <a name="nonKeyAttributesInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributesInput"></a>

```typescript
public readonly nonKeyAttributesInput: string[];
```

- *Type:* string[]

---

##### `projectionTypeInput`<sup>Optional</sup> <a name="projectionTypeInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionTypeInput"></a>

```typescript
public readonly projectionTypeInput: string;
```

- *Type:* string

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexProjection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>

---


### DynamodbGlobalSecondaryIndexProvisionedThroughputList <a name="DynamodbGlobalSecondaryIndexProvisionedThroughputList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.get"></a>

```typescript
public get(index: number): DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexProvisionedThroughput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

---


### DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference <a name="DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetWriteCapacityUnits">resetWriteCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```typescript
public resetReadCapacityUnits(): void
```

##### `resetWriteCapacityUnits` <a name="resetWriteCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```typescript
public resetWriteCapacityUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">writeCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```typescript
public readonly readCapacityUnitsInput: number;
```

- *Type:* number

---

##### `writeCapacityUnitsInput`<sup>Optional</sup> <a name="writeCapacityUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```typescript
public readonly writeCapacityUnitsInput: number;
```

- *Type:* number

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```typescript
public readonly readCapacityUnits: number;
```

- *Type:* number

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="writeCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```typescript
public readonly writeCapacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexProvisionedThroughput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>

---


### DynamodbGlobalSecondaryIndexTimeoutsOutputReference <a name="DynamodbGlobalSecondaryIndexTimeoutsOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

---


### DynamodbGlobalSecondaryIndexWarmThroughputOutputReference <a name="DynamodbGlobalSecondaryIndexWarmThroughputOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer"></a>

```typescript
import { dynamodbGlobalSecondaryIndex } from '@cdktn/provider-aws'

new dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetReadUnitsPerSecond">resetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetWriteUnitsPerSecond">resetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadUnitsPerSecond` <a name="resetReadUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```typescript
public resetReadUnitsPerSecond(): void
```

##### `resetWriteUnitsPerSecond` <a name="resetWriteUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```typescript
public resetWriteUnitsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecondInput">readUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecondInput">writeUnitsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readUnitsPerSecondInput`<sup>Optional</sup> <a name="readUnitsPerSecondInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```typescript
public readonly readUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `writeUnitsPerSecondInput`<sup>Optional</sup> <a name="writeUnitsPerSecondInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```typescript
public readonly writeUnitsPerSecondInput: number;
```

- *Type:* number

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```typescript
public readonly readUnitsPerSecond: number;
```

- *Type:* number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```typescript
public readonly writeUnitsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamodbGlobalSecondaryIndexWarmThroughput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

---



